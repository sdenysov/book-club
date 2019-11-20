import {IUser} from '@@share/models/user';

export interface AuthState {
  loggedInUser: IUser;
  pending: boolean;
}
