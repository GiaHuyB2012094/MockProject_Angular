import { Action, Select, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { UserActions } from '../actions/user.actions';
import { IUser } from '../../models/interfaces/IUser.interface';

export interface UserStateModel {
  loggedInUser: IUser;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    loggedInUser: JSON.parse(localStorage.getItem('currentUser') || '{}'),
  },
})
@Injectable()
export class UserState {
  @Action(UserActions.RegisterLoggedInUser)
  registerLoggedInUser(
    ctx: StateContext<UserStateModel>,
    action: UserActions.RegisterLoggedInUser
  ) {
    ctx.patchState({ loggedInUser: action.payload });
  }
}
