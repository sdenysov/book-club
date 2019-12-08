import {IUser} from '@@share/models/user';

export interface IAuthState {
  loggedInUser: IUser;
  isLoggedIn: boolean;
  pending: boolean;
}
