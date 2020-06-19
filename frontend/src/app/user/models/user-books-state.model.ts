import {IBook} from '@@books/models/book';

export interface UserBooksState {
  loading: boolean;
  entries: IBook[];
}
