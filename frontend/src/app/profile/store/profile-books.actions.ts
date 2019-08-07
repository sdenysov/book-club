import {BookModel} from '@@share/models/book.model';
import {Action} from '@ngrx/store';
import {UserModel} from '@@share/models/user.model';

export enum ProfileBooksActionTypes {
  FetchProfileBooks = '[Profile] Fetch user books',
  FetchProfileBooksSucceed = '[Profile] Fetch user books succeed',
  FetchProfileBooksFailed = '[Profile] Fetch user books failed',
  FetchEditingBook = '[Profile] Fetch edit book',
  FetchEditingBookSucceed = '[Profile] Fetch edit book succeed',
  FetchEditingBookFailed = '[Profile] Fetch edit book failed',
  EditBook = '[Profile] Edit book',
  EditBookSucceed = '[Profile] Edit book succeed',
  EditBookFailed = '[Profile] Edit book failed'
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

export class FetchEditingBook implements Action {
  readonly type = ProfileBooksActionTypes.FetchEditingBook;

  constructor(public bookId: string) {}
}

export class FetchEditingBookSucceed implements Action {
  readonly type = ProfileBooksActionTypes.FetchEditingBookSucceed;

  constructor(public book: BookModel) {}
}

export class FetchEditingBookFailed implements Action {
  readonly type = ProfileBooksActionTypes.FetchEditingBookFailed;

  constructor(public error: Error) {}
}

export class EditBook implements Action {
  readonly type = ProfileBooksActionTypes.EditBook;

  constructor(public book: BookModel) {}
}

export class EditBookSucceed implements Action {
  readonly type = ProfileBooksActionTypes.EditBookSucceed;

  constructor(public book: BookModel) {}
}

export class EditBookFailed implements Action {
  readonly type = ProfileBooksActionTypes.EditBookFailed;

  constructor(public error: Error) {}
}

export const ProfileBooksActions = {
  FetchProfileBooks,
  FetchProfileBooksSucceed,
  FetchProfileBooksFailed,
  FetchEditingBook,
  FetchEditingBookSucceed,
  FetchEditingBookFailed,
  EditBook,
  EditBookSucceed,
  EditBookFailed
};

export type TProfileBooksAction =
  | FetchProfileBooks
  | FetchProfileBooksSucceed
  | FetchProfileBooksFailed
  | FetchEditingBook
  | FetchEditingBookSucceed
  | FetchEditingBookFailed
  | EditBook
  | EditBookSucceed
  | EditBookFailed
  ;
