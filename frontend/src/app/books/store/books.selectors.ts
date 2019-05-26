import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BooksStateModel} from '@@books/models/books-state.model';

export const getState = createFeatureSelector<BooksStateModel>('books');
export const getBooks = createSelector(getState, s => s.entries);
export const getBookById = function (id: number) {
  return createSelector(getBooks, books => books.find(book => book.id === id));
};
// TODO my books are loaded only after book-page component is loaded.
export const getBooksByOwnerId = function (id: number) {
  return createSelector(getBooks, books => books.filter(myBook => myBook.owner_id === id));
};
