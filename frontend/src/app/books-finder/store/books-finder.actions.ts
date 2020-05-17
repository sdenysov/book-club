import {createAction, props} from '@ngrx/store';
import {HttpErrorData} from '@@errors/models/http-error-data.model';
import {IBook} from '@@books/models/book';

export enum BooksFinderActionTypes {
  FETCH_BOOKS = '[BooksFinder] Fetch all books',
  FETCH_BOOKS_FAILED = '[BooksFinder] Fetch all books failed',
  SEARCH = '[BooksFinder] Search books',
  SEARCH_FAILED = '[BooksFinder] Search books failed',
  SET_BOOKS = '[BooksFinder] Set books'
}

export namespace BooksFinderActions {
  export const fetchBooks = createAction(BooksFinderActionTypes.FETCH_BOOKS);
  export const fetchBooksFailed = createAction(BooksFinderActionTypes.FETCH_BOOKS_FAILED, props<{ error: Error | HttpErrorData }>());
  export const searchBooks = createAction(BooksFinderActionTypes.SEARCH, props<{ query: string }>());
  export const searchBooksFailed = createAction(BooksFinderActionTypes.SEARCH_FAILED, props<{ error: Error | HttpErrorData }>());
  export const setBooks = createAction(BooksFinderActionTypes.SET_BOOKS, props<{ books: IBook[] }>());
}
