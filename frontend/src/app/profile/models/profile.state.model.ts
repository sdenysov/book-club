import {IBook} from '@@share/models/book';
import {IUserProfile} from '@@app/profile/models/user-profile';

export interface ProfileState {
  loaded: boolean;
  loading: boolean;
  books: IBook[];
  user: IUserProfile;
}
