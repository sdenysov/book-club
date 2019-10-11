import {Book} from '@@share/models/book';

export interface BooksState {
  loading: boolean;
  entries: Book[];
  bookDetail: Book;
}
