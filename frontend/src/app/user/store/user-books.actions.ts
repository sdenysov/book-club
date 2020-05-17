import {Action, createAction, props} from '@ngrx/store';

import {IBook} from '@@books/models/book';
import {HttpErrorData} from '@@errors/models/http-error-data.model';
import {BooksFinderActionTypes} from '@@app/books-finder/store/books-finder.actions';

export enum UserBooksActionTypes {
  FETCH_BOOKS = '[UserBooks] Fetch books',
  FETCH_BOOKS_SUCCEED = '[UserBooks]] Fetch books succeed',
  FETCH_BOOKS_FAILED = '[UserBooks] Fetch books failed'
}

export namespace UserBooksActions {
  export const fetchBooks = createAction(UserBooksActionTypes.FETCH_BOOKS, props<{ username: string }>());
  export const fetchBooksSucceed = createAction(UserBooksActionTypes.FETCH_BOOKS_SUCCEED, props<{ books: IBook[] }>());
  export const fetchBooksFailed = createAction(UserBooksActionTypes.FETCH_BOOKS_FAILED, props<{ error: Error | HttpErrorData }>());
}

