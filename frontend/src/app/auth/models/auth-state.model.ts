import {IUser} from '@@share/models/user.model';

export interface IAuthState {
  loggedInUser: IUser;
  loggedInUserLoaded: boolean;
}
