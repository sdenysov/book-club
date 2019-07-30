import {BookModel} from '@@share/models/book.model';

export interface BooksStateModel {
  loading: boolean;
  entries: BookModel[];
  bookDetail: BookModel;
}
