import {IBook} from '@@share/models/book';
import {Action} from '@ngrx/store';

export enum BooksActionTypes {
  FetchBooks = '[Books] Fetch books',
  FetchBooksSucceed = '[Books] Fetch books succeed',
  FetchBooksFailed = '[Books] Fetch books failed',
  FetchBookDetail = '[Books] Fetch book detail',
  FetchBookDetailSucceed = '[Books] Fetch book detail succeed',
  FetchBookDetailFailed = '[Books] Fetch book detail failed'
}

export class FetchBooks implements Action {
  readonly type = BooksActionTypes.FetchBooks;
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

export type BooksAction =
  | FetchBooks
  | FetchBooksSucceed
  | FetchBooksFailed
  | FetchBookDetail
  | FetchBookDetailSucceed
  | FetchBookDetailFailed
  ;
