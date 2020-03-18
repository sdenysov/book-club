import {IUserProfile} from '@@app/profile/models/user-profile';
import {IBook} from '@@books/models/book';

export interface ProfileState {
  loaded: boolean;
  loading: boolean;
  books: IBook[];
  user: IUserProfile;
}
