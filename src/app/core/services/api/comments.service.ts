import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, concatMap, map, switchMap, tap } from 'rxjs';
import { IComment } from '../../models/interfaces/IComment.interface';
import { IRoom } from '../../models/interfaces/IRoom.interface';
import { RoomsService } from './rooms.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  baseUrl = '/api/comments'

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

  getComments(): Observable<IComment[]>{
    return this.http.get<IComment[]>(this.baseUrl);
  }

  getCommentsByRoomID(roomID: number): Observable<IComment[]>{
    return this.http.get<IComment[]>(this.baseUrl)
            .pipe(
              map((comments) => comments.filter(c => c.roomID === roomID))
            );
  }

  getCommentsByRoomIDAndUserID(userID: number, roomID: number) {
    return this.http.get<IComment[]>(this.baseUrl)
            .pipe(
              map((comments) => {
                return comments.find(c => c.roomID === roomID && c.userID === userID);
              })
            );
  }

  calculateTheAvarageScore(comment: IComment): number{
    const rateSatisfactionScore = ["poor","avarge","satisfaction","veryGood","excellent"];
    
    const satisfactionScore = rateSatisfactionScore.findIndex(i => i === comment?.rateSatisfaction) + 1;
    
    const serviceScore = comment.rateSerivces?.reduce((sum: number, currI: number) =>  sum + (currI*0.2),0 ) || 0;
    
    return satisfactionScore + serviceScore;
  }
 
}
