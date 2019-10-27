import {IBook} from '@@share/models/IBook';

export interface IBooksState {
  loading: boolean;
  entries: IBook[];
  bookDetail: IBook;
}
