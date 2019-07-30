import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BooksStateModel} from '@@books/models/books-state.model';

const getState = createFeatureSelector<BooksStateModel>('books');
const getBooks = createSelector(getState, s => s.entries);
const getBookById = function (id: string) {
  return createSelector(getBooks, books => books.find(book => book.id === id));
};
const getBookDetail = createSelector(getState, s => s.bookDetail);
const getBooksByOwnerId = function (id: string) {
  return createSelector(getBooks, books => books.filter(myBook => myBook.owner.id === id));
};

export const BooksSelectors = {
  getState,
  getBooks,
  getBookById,
  getBookDetail,
  getBooksByOwnerId
};
