import {BookModel} from '@@share/models/book.model';
import {Action} from '@ngrx/store';
import {UserModel} from '@@user/models/user.model';

export enum UserBooksActionTypes {
  FetchUserBooks = '[Profile] Fetch user books',
  FetchUserBooksSucceed = '[Profile] Fetch user books succeed',
  FetchUserBooksFailed = '[Profile] Fetch user books failed',
  FetchEditingBook = '[Profile] Fetch edit book',
  FetchEditingBookSucceed = '[Profile] Fetch edit book succeed',
  FetchEditingBookFailed = '[Profile] Fetch edit book failed'
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

export class FetchEditingBook implements Action {
  readonly type = UserBooksActionTypes.FetchEditingBook;

  constructor(public bookId: string) {}
}

export class FetchEditingBookSucceed implements Action {
  readonly type = UserBooksActionTypes.FetchEditingBookSucceed;

  constructor(public book: BookModel) {}
}

export class FetchEditingBookFailed implements Action {
  readonly type = UserBooksActionTypes.FetchEditingBookFailed;

  constructor(public error: Error) {}
}


export const UserBooksActions = {
  FetchUserBooks,
  FetchUserBooksSucceed,
  FetchUserBooksFailed,
  FetchEditingBook,
  FetchEditingBookSucceed,
  FetchEditingBookFailed
};

export type TUserBooksAction =
  | FetchUserBooks
  | FetchUserBooksSucceed
  | FetchUserBooksFailed
  | FetchEditingBook
  | FetchEditingBookSucceed
  | FetchEditingBookFailed
  ;
