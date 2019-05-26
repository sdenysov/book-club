import {BookModel} from '@@share/models/book.model';
import {Action} from '@ngrx/store';
import {UserModel} from '@@user/models/user.model';

export enum UserBooksActionTypes {
  FetchUserBooks = '[Profile] Fetch user books',
  FetchUserBooksSucceed = '[Profile] Fetch user books succeed',
  FetchUserBooksFailed = '[Profile] Fetch user books failed'
}

export class FetchUserBooks implements Action {
  readonly type = UserBooksActionTypes.FetchUserBooks;

  constructor(public user: UserModel) {}
}

export class FetchUserBooksSucceed implements Action {
  readonly type = UserBooksActionTypes.FetchUserBooksSucceed;

  constructor(public books: BookModel[]) {}
}

export class FetchUserBooksFailed implements Action {
  readonly type = UserBooksActionTypes.FetchUserBooksFailed;

  constructor(public error: Error) {}
}

export const UserBooksActions = {
  FetchUserBooks,
  FetchUserBooksSucceed,
  FetchUserBooksFailed
};

export type TUserBooksAction =
  | FetchUserBooks
  | FetchUserBooksSucceed
  | FetchUserBooksFailed
  ;
