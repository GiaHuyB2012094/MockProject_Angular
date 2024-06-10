import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../../models/interfaces/IUser.interface';
import { Observable, map } from 'rxjs';
import { LoginDTO } from '../../models/dto/auth.dto';
import { SignupDTO } from '../../models/dto/user.dto';
import { Store } from '@ngxs/store';
import { UserActions } from '../../store/actions/user.actions';
import { SetUserAction } from '../../store/states/user.state';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = '/api/users';

  constructor(
    private http: HttpClient,
    private store: Store,
  ) {}

  private setUserToLocalStorage(user: any){
    localStorage.setItem('currentUser', JSON.stringify(user))
  }

  getUsers = (): Observable<any> => {
    return this.http.get<IUser[]>(this.baseUrl);
  };

  getUserById = (id: number): Observable<any> => {
    return this.http.get<IUser>(`${this.baseUrl}/${id}`);
  };

  login = (dto: LoginDTO): Observable<any> => {
    return this.http.get<any>(this.baseUrl)
            .pipe(
              map(users => {
                const user = users.find((u: LoginDTO) => u.email === dto.email && u.password === dto.password); 
                if (user) {
                  const result:any = Object.fromEntries(Object.entries(user).filter(([k]) => k !== 'password'));
                  this.setUserToLocalStorage(result);
                  this.store.dispatch(new SetUserAction(user));
                  return true;
                } else {
                  return false;
                }
              }) 
            );
  };

  logout() {
    localStorage.removeItem('currentUser');
  }
  signup = (dto: SignupDTO): Observable<any> => {
    return this.http.post<SignupDTO>(this.baseUrl, dto);
  };
  isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

}
