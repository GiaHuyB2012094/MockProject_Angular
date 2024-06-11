import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISaveRoom } from '../../models/interfaces/ISaveRoom.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveRoomService {
  baseUrl = '/api/saves'

  constructor(private http: HttpClient) { }

  getSaveOfUser = (userID: number): Observable<any> => {
    return this.http.get<any>(this.baseUrl)
            .pipe(
              map(saves => {
                const savesOfUser = saves.filter((sav: { userID: number; }) => sav.userID === userID)
                if (savesOfUser) {
                  return savesOfUser;
                } else {
                  return [];
                }
              })
            );
  }
  createSaveRoom(userID: number, roomID: number){
    return this.http.post<ISaveRoom>(this.baseUrl,{userID, roomID})
  }

  deleteSaveRoom(id: number){
    return this.http.delete<ISaveRoom>(`${this.baseUrl}/${id}`);
  }
}
