import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { IRoom } from '../../models/interfaces/IRoom.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  private baseUrl = '/api/rooms/'
  RoomByID!:IRoom;

  constructor(private http: HttpClient) { }

  getRooms = (): Observable<any> => {
    return this.http.get<IRoom>(this.baseUrl);
  }

  getRoomById = (id: number): Observable<any> => {
    return this.http.get<IRoom>(`${this.baseUrl}${id}`)
  }

  // updateRoomById =(id: number, roomData: any): Observable<any> => {
  //   console.log(roomData);
  //   return this.http.put(`${this.baseUrl}/${id}`, roomData);
  // }
  editRoom(room: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${room.id}`, room);
  }
  // addroomBookingById = (id: number, currentBookingData: any): Observable<any> => {
  //   return this.http.put<IRoom>(`${this.baseUrl}/${id}`, {currentBookingData});
  // }
} 
