import {IBook} from '@@share/models/book.model';

export interface IBooksState {
  loading: boolean;
  entries: IBook[];
  bookDetail: IBook;
}
