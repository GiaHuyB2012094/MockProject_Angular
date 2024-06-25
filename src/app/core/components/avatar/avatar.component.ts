import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { IUser } from '../../models/interfaces/IUser.interface';
import { Observable } from 'rxjs';
import { UserState } from '../../store/states/user.state';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit{
  user$!: Observable<IUser>;
  currentUser!: IUser;
  constructor(
    private store: Store,
  ){}

  
  ngOnInit(): void {
    this.getCurrentUser()
  }
  getCurrentUser = async() => {
    this.user$ = this.store.select(UserState.user);
    await this.user$.subscribe((user) => {

      this.currentUser = user;
    });
  }
}
