import {IUser} from '@@shared/models/user';

export interface IAuthState {
  user: IUser;
  loggedIn: boolean;
  pending: boolean;
}
