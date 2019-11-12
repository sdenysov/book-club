import {IUser} from '@@share/models/user.model';

export interface IAuthState {
  loggedInUser: IUser;
  loggedIn: boolean;
  pending: boolean;
}
