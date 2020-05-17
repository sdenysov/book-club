import {BooksState} from '@@user/models/books-state.model';
import {UserBooksActions} from '@@user/store/user-books.actions';
import {Action, createReducer, on} from '@ngrx/store';

const initialState: BooksState = {
  loading: false,
  entries: []
};

const _userBooksReducer = createReducer(initialState,
  on(
    UserBooksActions.fetchBooks,
    (state) => ({...state, loading: true})
  ),
  on(
    UserBooksActions.fetchBooksSucceed,
    (state, {books}) => ({...state, loading: false, entries: books})
  ),
  on(
    UserBooksActions.fetchBooksFailed,
    (state) => ({...state, loading: false})
  )
);

export function userBooksReducer(state: BooksState = initialState, action: Action): BooksState {
  return _userBooksReducer(state, action);
}

