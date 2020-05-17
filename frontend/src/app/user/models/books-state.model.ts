import {IBook} from '@@books/models/book';

export interface BooksState {
  loading: boolean;
  entries: IBook[];
}
