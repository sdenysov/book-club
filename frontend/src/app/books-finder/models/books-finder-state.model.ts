import {IBook} from '../../books/models/book';

export interface IBooksFinderState {
  loading: boolean;
  entries: IBook[];
}
