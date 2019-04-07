import {Action} from '@ngrx/store';
import {BookModel} from '@@books-page/models/book.model';

export enum BooksActions {
  FetchBooks = '[Books] Fetch books',
  FetchBooksSucceed = '[Books] Fetch books succeed',
  FetchBooksFailed = '[Books] Fetch books failed',
}

export class FetchBooks implements Action {
  readonly type = BooksActions.FetchBooks;
}

export class FetchBooksSucceed implements Action {
  readonly type = BooksActions.FetchBooksSucceed;

  constructor(public books: BookModel[]) {}
}

export class FetchBooksFailed implements Action {
  readonly type = BooksActions.FetchBooksFailed;
  constructor(public error: Error) {}
}

export type BooksActionTypes =
  | FetchBooks
  | FetchBooksSucceed
  | FetchBooksFailed
  ;
