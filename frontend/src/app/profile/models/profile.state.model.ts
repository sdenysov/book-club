import {IBook} from '../../share/models/IBook';

export interface IProfileState {
  loaded: boolean;
  loading: boolean;
  books: IBook[];
}
