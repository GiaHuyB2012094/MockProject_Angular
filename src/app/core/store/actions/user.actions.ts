import { IUser } from "../../models/interfaces/IUser.interface";

export namespace UserActions{
    export class RegisterLoggedInUser{
        static readonly type = `[User] Register logged in user`;
        constructor(public payload: IUser) {}
    }
}