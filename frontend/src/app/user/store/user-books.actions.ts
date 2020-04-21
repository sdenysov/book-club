import {Action} from '@ngrx/store';

import {IBook} from '@@books/models/book';

// TODO rename action scope [Books] [UserBooks]
export enum BooksActionTypes {
  FetchBooks = '[Books] Fetch books',
  FetchBooksSucceed = '[Books] Fetch books succeed',
  FetchBooksFailed = '[Books] Fetch books failed',
  FetchBookDetail = '[Books] Fetch book detail',
  FetchBookDetailSucceed = '[Books] Fetch book detail succeed',
  FetchBookDetailFailed = '[Books] Fetch book detail failed'
}

export namespace UserBooksActions {
  // TODO export actions here...
}

export class FetchBooks implements Action {
  readonly type = BooksActionTypes.FetchBooks;
  constructor(public username: string) {}
}

export class FetchBooksSucceed implements Action {
  readonly type = BooksActionTypes.FetchBooksSucceed;

  constructor(public books: IBook[]) {}
}

export class FetchBooksFailed implements Action {
  readonly type = BooksActionTypes.FetchBooksFailed;

  constructor(public error: Error) {}
}

export class FetchBookDetail implements Action {
  readonly type = BooksActionTypes.FetchBookDetail;

  constructor(public bookId: string) {}
}

export class FetchBookDetailSucceed implements Action {
  readonly type = BooksActionTypes.FetchBookDetailSucceed;

  constructor(public book: IBook) {}
}

export class FetchBookDetailFailed implements Action {
  readonly type = BooksActionTypes.FetchBookDetailFailed;

  constructor(public error: Error) {}
}

export const UserBooksActions = {
  FetchBooks,
  FetchBooksSucceed,
  FetchBooksFailed,
  FetchBookDetail,
  FetchBookDetailSucceed,
  FetchBookDetailFailed
};

export type UserBooksAction =
  | FetchBooks
  | FetchBooksSucceed
  | FetchBooksFailed
  | FetchBookDetail
  | FetchBookDetailSucceed
  | FetchBookDetailFailed
  ;
