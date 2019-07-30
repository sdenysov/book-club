import {BookModel} from '@@share/models/book.model';

export interface ProfileStateModel {
  loaded: boolean;
  loading: boolean;
  books: BookModel[];
  editingBook: BookModel;
}
