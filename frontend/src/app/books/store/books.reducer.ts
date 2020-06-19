import {Action, createReducer, on} from '@ngrx/store';
import {BooksActions} from '@@books/store/books.actions';
import {IBooksState} from '@@books/models/books-state';

const initialState: IBooksState = {
  loaded: false,
  bookDetails: null
};

const reducer = createReducer(initialState,
  on(
    BooksActions.fetchBookSucceed,
    (state, {book}) => ({...state, loaded: true, bookDetails: book})
  )
);

export function booksReducer(state: IBooksState = initialState, action: Action): IBooksState {
  return reducer(state, action);
}

