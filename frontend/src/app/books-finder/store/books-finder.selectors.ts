import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BOOKS_FINDER_STORE_KEY} from '@@app/books-finder/store/books-finder-store.properties';
import {IBooksFinderState} from '@@app/books-finder/models/books-finder-state.model';

export namespace BooksFinderSelectors {
 export const getState = createFeatureSelector<IBooksFinderState>(BOOKS_FINDER_STORE_KEY);
 export const getAllBooks = createSelector(getState, s => s.entries);
 export const getAllBookDetail = createSelector(getState, s => s.bookFinderDetail);
 export const getAllBookById = createSelector(
    getAllBooks,
    (books, props) => books.find(book => book.id === props.id)
  );
}
