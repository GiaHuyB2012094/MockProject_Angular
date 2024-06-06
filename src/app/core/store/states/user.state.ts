import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { UserActions } from '../actions/user.actions';
import { IUser } from '../../models/interfaces/IUser.interface';

export class SetUserAction {
  static readonly type = '[User] Set User';
  constructor(public payload: IUser) {}
}

export interface UserStateModel {
  user: IUser;
}
@State<UserStateModel>({
  name: 'user',
  defaults: {
    user: JSON.parse(localStorage.getItem('currentUser') || '{}'),
  },
})

@Injectable()
export class UserState {
  @Selector()
  static user(state: UserStateModel) {
    return state.user;
  }

  @Action(SetUserAction)
  setUser(
    { patchState }: StateContext<UserStateModel>,
    { payload }: SetUserAction
  ) {
    patchState({ user: payload });
  }
}
