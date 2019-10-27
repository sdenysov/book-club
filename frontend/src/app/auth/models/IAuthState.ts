import {IUser} from '@@share/models/IUser';

export interface IAuthState {
  loggedInUser: IUser;
  loggedInUserLoaded: boolean;
}
