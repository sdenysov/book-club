import {IUser} from '@@share/models/user';

export interface AuthState {
  loggedInUser: IUser;
  isLoggedIn: boolean;
  pending: boolean;
}
