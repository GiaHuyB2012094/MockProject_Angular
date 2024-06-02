import { Select } from '@ngxs/store';
import { UserState, UserStateModel } from '../states/user.state';

export class UserSelectors {
  @Select(UserState)
  static currentUser(state: UserStateModel): any {
    return state.loggedInUser;
  }
}
