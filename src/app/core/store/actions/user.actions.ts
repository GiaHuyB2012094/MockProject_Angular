import { IUser } from '../../models/interfaces/IUser.interface';

export namespace UserActions {
  export class RegisterLoggedInUser {
    static readonly type = `[User] Register logged in user`;
    constructor(public payload: IUser) {}
  }

  // export class GetCurrentUser {
  //   static readonly type = `[User] Get current user`;
  //   constructor(public payload: IUser) {}
  // }
}
