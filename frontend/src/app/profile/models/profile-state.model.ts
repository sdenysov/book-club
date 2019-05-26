import {BookModel} from '@@share/models/book.model';

export interface ProfileStateModel {
  loading: boolean;
  books: BookModel[];
}
