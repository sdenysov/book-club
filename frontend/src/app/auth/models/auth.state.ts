import {User} from '@@share/models/user';

export interface AuthState {
  loggedInUser: User;
  pending: boolean;
}
