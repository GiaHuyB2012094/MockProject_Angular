import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../../models/interfaces/IUser.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = '/api/users';
  
  constructor(private http: HttpClient) { }
  
  getUsers = () => {
    return this.http.get<IUser[]>(this.baseUrl );
  }

  getUserById = (id: number) => {
    return this.http.get<IUser>(`${this.baseUrl}/${id}`);
  }
  
}
