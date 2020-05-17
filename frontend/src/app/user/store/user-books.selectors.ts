import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BooksState} from '@@user/models/books-state.model';
import {USER_BOOKS_STORE_KEY} from '@@user/store/user-books-store.properties';

const getState = createFeatureSelector<BooksState>(USER_BOOKS_STORE_KEY);
const getBooks = createSelector(getState, s => s.entries);
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
  getBooksByOwnerId
};
