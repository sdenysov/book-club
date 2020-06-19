import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IBooksState} from '@@books/models/books-state';
import {BOOKS_STORE_KEY} from '@@books/store/index';

export namespace BooksSelectors {
  export const getState = createFeatureSelector<IBooksState>(BOOKS_STORE_KEY);
  export const getBook = createSelector(getState, s => s.bookDetails);
  export const loaded = createSelector(getState, s => s.loaded);
}


