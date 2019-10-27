import {Book} from '@@share/models/book';

export interface ProfileState {
  loaded: boolean;
  loading: boolean;
  books: Book[];
}
