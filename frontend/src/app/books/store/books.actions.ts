import {createAction, props} from '@ngrx/store';
import {IBook} from '@@books/models/book';
import {HttpErrorData} from '@@errors/models/http-error-data.model';

export enum BooksActionTypes {
  FETCH_BOOK = '[Books] Fetch book',
  FETCH_BOOK_SUCCEED = '[Books] Fetch book succeed',
  FETCH_BOOK_FAILED = '[Books] Fetch book failed'
}

export namespace BooksActions {
  export const fetchBook = createAction(BooksActionTypes.FETCH_BOOK, props<{ id: string }>());
  export const fetchBookSucceed = createAction(BooksActionTypes.FETCH_BOOK_SUCCEED, props<{ book: IBook }>());
  export const fetchBookFailed = createAction(BooksActionTypes.FETCH_BOOK_FAILED, props<{ error: Error | HttpErrorData }>());
}

