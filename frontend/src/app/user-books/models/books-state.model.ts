import {BookModel} from '@@share/models/book.model';

export interface BooksState {
  loading: boolean;
  entries: BookModel[];
  bookDetail: BookModel;
}
