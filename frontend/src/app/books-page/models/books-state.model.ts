import {BookModel} from '@@books-page/models/book.model';

export interface BooksStateModel {
  loading: boolean;
  entries: BookModel[];
}
