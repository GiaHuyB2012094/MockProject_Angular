import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IComment } from '../../models/interfaces/IComment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  baseUrl = '/api/comments'

  constructor(private http: HttpClient) { }

  getComments(): Observable<IComment[]>{
    return this.http.get<IComment[]>(this.baseUrl);
  }

  getCommentsByRoomID(roomID: number): Observable<IComment[]>{
    return this.http.get<IComment[]>(this.baseUrl)
            .pipe(
              map((comments) => comments.filter(c => c.roomID === roomID))
            );
  }
}
