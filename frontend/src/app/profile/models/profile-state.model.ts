import {IBook} from '@@share/models/book.model';

export interface IProfileState {
  loaded: boolean;
  loading: boolean;
  books: IBook[];
}
