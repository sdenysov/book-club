import {createAction, props} from '@ngrx/store';
import {HttpErrorData} from '@@errors/models/http-error-data.model';
import {IBook} from '@@books/models/book';

export enum BooksFinderActionTypes {
  FETCH_BOOKS = '[BooksFinder] Fetch all books',
  FETCH_BOOKS_SUCCEED = '[BooksFinder] Fetch all books succeed',
  FETCH_BOOKS_FAILED = '[BooksFinder] Fetch all books failed',
  FETCH_BOOK_DETAIL = '[BooksFinder] Fetch book detail',
  FETCH_BOOK_DETAIL_SUCCEED = '[BooksFinder] Fetch book detail succeed',
  FETCH_BOOK_DETAIL_FAILED = '[BooksFinder] Fetch book detail failed'
}

export namespace BooksFinderActions {
  export const fetchBooks = createAction(BooksFinderActionTypes.FETCH_BOOKS);
  export const fetchBooksSucceed = createAction(BooksFinderActionTypes.FETCH_BOOKS_SUCCEED, props<{ books: IBook[] }>());
  export const fetchBooksFailed = createAction(BooksFinderActionTypes.FETCH_BOOKS_FAILED, props<{ error: Error | HttpErrorData }>());
  export const fetchBookDetail = createAction(BooksFinderActionTypes.FETCH_BOOK_DETAIL, props<{ bookId: string }>());
  export const fetchBookDetailSucceed = createAction(BooksFinderActionTypes.FETCH_BOOK_DETAIL_SUCCEED, props<{ book: IBook }>());
  export const fetchBookDetailFailed = createAction(BooksFinderActionTypes.FETCH_BOOK_DETAIL_FAILED,
    props<{ error: Error | HttpErrorData }>());
}
