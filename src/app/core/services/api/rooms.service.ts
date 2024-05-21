import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRoom } from '../../models/interfaces/IRoom.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  baseUrl = '/api/rooms'
  
  constructor(private http: HttpClient) { }

  getRooms = (): Observable<any> => {
    return this.http.get<IRoom>(this.baseUrl);
  }

  getRoomById = (id: number): Observable<any> => {
    return this.http.get<IRoom>(`${this.baseUrl}/${id}`)
  }

  
}
