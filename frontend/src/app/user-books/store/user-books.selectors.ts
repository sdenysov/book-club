import {BooksState} from '@@app/user-books/models/books-state.model';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {USER_BOOKS_STORE_KEY} from '@@app/user-books/store/user-books-store.properties';

const getState = createFeatureSelector<BooksState>(USER_BOOKS_STORE_KEY);
const getBooks = createSelector(getState, s => s.entries);
const getBookDetail = createSelector(getState, s => s.bookDetail);
const getBookById = createSelector(
  getBooks,
  (books, props) => books.find(book => book.id === props.id)
);
const getBooksByOwnerId = createSelector(
  getBooks,
  (books, props) => books.filter(myBook => myBook.owner.id === props.id)
);

export const UserBooksSelectors = {
  getState,
  getBooks,
  getBookById,
  getBookDetail,
  getBooksByOwnerId
};
