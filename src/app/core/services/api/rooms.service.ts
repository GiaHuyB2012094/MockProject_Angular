import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, switchMap, tap } from 'rxjs';
import { IRoom } from '../../models/interfaces/IRoom.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  private baseUrl = '/api/rooms/'
  rooms: any;
  room: any;

  constructor(private http: HttpClient) { }
  
  private roomsSubject = new BehaviorSubject<IRoom[]>([]);
  private roomSubject = new BehaviorSubject<any>({});
  rooms$ = this.roomsSubject.asObservable();
  room$ = this.roomSubject.asObservable();

  getRooms = (): Observable<any> => {
    return this.http.get<IRoom[]>(this.baseUrl).pipe(
      tap(data => this.roomsSubject.next(data))
    );
  }

  getRoomById = (id: number): Observable<any> => {
    return this.http.get<IRoom>(`${this.baseUrl}${id}`).pipe(
      tap(data => this.roomSubject.next(data))
    );
  }

  editRoom(room: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${room.id}`, room).pipe(
      tap(() => {
        this.getRooms().subscribe()
        this.getRoomById(room.id).subscribe()
      })
    );
  }
 
} 
