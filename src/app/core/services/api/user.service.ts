import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../../models/interfaces/IUser.interface';
import { Observable } from 'rxjs';
import { LoginDTO } from '../../models/dto/auth.dto';
import { SignupDTO } from '../../models/dto/user.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = '/api/users';

  constructor(private http: HttpClient) {}

  getUsers = (): Observable<any> => {
    return this.http.get<IUser[]>(this.baseUrl);
  };

  getUserById = (id: number): Observable<any> => {
    return this.http.get<IUser>(`${this.baseUrl}/${id}`);
  };

  login = (dto: LoginDTO): Observable<any> => {
    return this.http.get<LoginDTO>(
      `${this.baseUrl}/?email=${dto.email}&password=${dto.password}`
    );
  };

  signup = (dto: SignupDTO): Observable<any> => {
    return this.http.post<SignupDTO>(this.baseUrl, dto);
  };
}
