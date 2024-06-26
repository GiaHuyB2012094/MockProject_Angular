import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, concatMap, map, switchMap, tap } from 'rxjs';
import { IComment } from '../../models/interfaces/IComment.interface';
import { IRoom } from '../../models/interfaces/IRoom.interface';
import { RoomsService } from './rooms.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  baseUrl = '/api/comments'


  private commentsSubject = new BehaviorSubject<any[]>([]);
  comments$ = this.commentsSubject.asObservable();

  private commentSubject = new BehaviorSubject<any>({});
  comment$ = this.commentSubject.asObservable();


  constructor(
    private http: HttpClient,
    private roomService: RoomsService,
  ) { }

  createComment(commentData: any, roomID: number): Observable<IComment[]>{
    commentData.avarageScore = this.calculateTheAvarageScore(commentData);

    const getComment = () => this.getCommentsByRoomID(roomID);
    const getRoom = () => this.roomService.getRoomById(roomID);

    combineLatest(getComment(),getRoom()).subscribe(
      ([comments,room] : any) => {
        // satisfactionsScoreTemp
        let satisfactionScoreTemp = room.satisfactionScore .map((s: { name: any; score: number; }) => {
          if (s.name === commentData.rateSatisfaction) {
            s.score++;
          }
            return s;
        })
        room.satisfactionScore = satisfactionScoreTemp;

        // services Score

        let arr = comments.reduce((sum: Array<number>, comment: any) => {
          return comment.rateSerivces.map((element: number, index: number) => element + sum[index]);
        },commentData.rateSerivces)
        
        arr = arr.map((element: number, index: number) => Math.round(element/(comments.length + 1)) );
        
        let servicesScoreTemp = room.servicesScore.map((s: { name: string }, idx: any) => ({name: s.name, score: arr[idx]}));
        room.servicesScore = [...servicesScoreTemp]
        // avarage Score

        let avarageScoreTemp = comments.reduce((s: number, currI: any) => s + currI.avarageScore,0);
        room.ratingScore = ((Number(avarageScoreTemp) + Number(commentData.avarageScore))/(comments.length + 1)).toFixed(1);
        
        this.roomService.editRoom(room).subscribe({
          next: () => console.log('room updated successfull'),
          error: (err) => console.log('Cannot updated room ',err),
        })

        }
    )

    return this.http.post<IComment>(this.baseUrl, commentData)
            .pipe(
              switchMap(() => this.getCommentsByRoomID(roomID))
            );
  }

  getCommentsRandom(): Observable<IComment[]>{
    return this.http.get<IComment[]>(this.baseUrl).pipe(
      map(comments => comments.sort((a, b) => 0.5 - Math. random()))
    )
  }

  getComments(): Observable<IComment[]>{
    return this.http.get<IComment[]>(this.baseUrl).pipe(
      tap(data => this.commentsSubject.next(data))
    );
  }

  getCommentsByRoomID(roomID: number): Observable<IComment[]>{
    return this.http.get<IComment[]>(this.baseUrl)
            .pipe(
              map((comments) => comments.filter(c => c.roomID === roomID && c.parentID === null)),
              tap(data => this.commentsSubject.next(data))
            );
  }

  getCommentsByRoomIDAndUserID(userID: number, roomID: number) {
    return this.http.get<IComment[]>(this.baseUrl)
      .pipe(
        map((comments) => comments.filter(c => c.roomID === roomID && c.userID === userID)),
        tap(data => {
          return this.commentsSubject.next(data)
        })
      );
  }

  getCommentsReply (parentID: number, roomID: number) {
    return this.http.get<IComment[]>(this.baseUrl)
      .pipe(
        map((comments) => comments.filter(c => c.roomID === roomID && c.parentID === parentID )),
        
      )}

  replyComment(commentData: any): Observable<IComment[]>{
    return this.http.post<IComment[]>(this.baseUrl,commentData);
  }

  // editComment(commentData: any): Observable<any> {
  //   return this.http.put(`${this.baseUrl}${commentData.id}`, commentData);
  // }

  // deleteComment(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}${id}`);
  // }


  calculateTheAvarageScore(comment: IComment): number{
    const rateSatisfactionScore = ["poor","avarge","satisfaction","veryGood","excellent"];
    
    const satisfactionScore = rateSatisfactionScore.findIndex(i => i === comment?.rateSatisfaction) + 1;
    
    const serviceScore = comment.rateSerivces?.reduce((sum: number, currI: number) =>  sum + (currI*0.2),0 ) || 0;
    
    return satisfactionScore + serviceScore;
  }
 
}
