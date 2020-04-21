import {BooksFinderActions} from '@@app/books-finder/store/books-finder.actions';
import {IBooksFinderState} from '@@app/books-finder/models/books-finder-state.model';
import {Action, createReducer, on} from '@ngrx/store';

const initialState: IBooksFinderState = {
  loading: false,
  entries: [],
  bookFinderDetail: null
};

const _booksFinderReducer = createReducer(initialState,
  on(
    BooksFinderActions.fetchBooks,
    (state) => ({...state, loading: true})
  ),
  on(
    BooksFinderActions.fetchBooksSucceed,
    (state, {books}) => ({...state, loading: false, entries: books})
  ),
  on(
    BooksFinderActions.fetchBooksFailed,
    (state) => ({...state, loading: false})
  ),
  on(
    BooksFinderActions.fetchBookDetailSucceed,
    (state, {book}) => ({...state, bookFinderDetail: book})
  ),
);

export function booksFinderReducer(state: IBooksFinderState = initialState, action: Action): IBooksFinderState {
  return _booksFinderReducer(state, action);
}

