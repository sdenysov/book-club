import {BookModel} from '@@share/models/book.model';
import {Action} from '@ngrx/store';
import {UserModel} from '@@share/models/user.model';

export enum ProfileBooksActionTypes {
  FetchProfileBooks = '[Profile] Fetch user books',
  FetchProfileBooksSucceed = '[Profile] Fetch user books succeed',
  FetchProfileBooksFailed = '[Profile] Fetch user books failed'
}

export class FetchProfileBooks implements Action {
  readonly type = ProfileBooksActionTypes.FetchProfileBooks;

  constructor(public user: UserModel) {}
}

export class FetchProfileBooksSucceed implements Action {
  readonly type = ProfileBooksActionTypes.FetchProfileBooksSucceed;

  constructor(public books: BookModel[]) {}
}

export class FetchProfileBooksFailed implements Action {
  readonly type = ProfileBooksActionTypes.FetchProfileBooksFailed;

  constructor(public error: Error) {}
}

export const ProfileBooksActions = {
  FetchProfileBooks,
  FetchProfileBooksSucceed,
  FetchProfileBooksFailed,
};

export type TProfileBooksAction =
  | FetchProfileBooks
  | FetchProfileBooksSucceed
  | FetchProfileBooksFailed
  ;
