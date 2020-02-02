import {IBook} from '@@share/models/book';

export interface BooksState {
  loading: boolean;
  entries: IBook[];
  bookDetail: IBook;
}
