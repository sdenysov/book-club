import {BookModel} from '@@share/models/book.model';

export interface ProfileState {
  loaded: boolean;
  loading: boolean;
  books: BookModel[];
}
