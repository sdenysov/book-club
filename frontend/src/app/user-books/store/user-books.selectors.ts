import {IBooksState} from '@@app/user-books/models/books-state.model';
import {createFeatureSelector, createSelector} from '@ngrx/store';

const getState = createFeatureSelector<IBooksState>('books');
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
