import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap, tap } from 'rxjs';
import { IComment } from '../../models/interfaces/IComment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  baseUrl = '/api/comments'

  constructor(private http: HttpClient) { }

  createComment(commentData: any, roomID: number): Observable<IComment[]>{
    commentData.avarageScore = this.calculateTheAvarageScore(commentData);

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

  calculateTheAvarageScore(comment: IComment): number{
    const rateSatisfactionScore = ["poor","avarge","satisfaction","veryGood","excellent"];
    
    const satisfactionScore = rateSatisfactionScore.findIndex(i => i === comment?.rateSatisfaction) + 1;
    
    const serviceScore = comment.rateSerivces?.reduce((sum: number, currI: number) =>  sum + (currI*0.2),0 ) || 0;
    
    return satisfactionScore + serviceScore;
  }
 
}
