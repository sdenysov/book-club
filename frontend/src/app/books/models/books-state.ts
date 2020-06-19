import {IBook} from '@@books/models/book';

export interface IBooksState {
  loaded: boolean;
  bookDetails: IBook;
}
