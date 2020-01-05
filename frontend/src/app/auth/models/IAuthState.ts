import {IUser} from '@@share/models/user';

export interface IAuthState {
  user: IUser;
  loggedIn: boolean;
  pending: boolean;
}
