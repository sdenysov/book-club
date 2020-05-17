import {BooksFinderActions} from '@@app/books-finder/store/books-finder.actions';
import {IBooksFinderState} from '@@app/books-finder/models/books-finder-state.model';
import {Action, createReducer, on} from '@ngrx/store';

const initialState: IBooksFinderState = {
  loading: false,
  entries: []
};

const _booksFinderReducer = createReducer(initialState,
  on(
    BooksFinderActions.fetchBooks,
    BooksFinderActions.searchBooks,
    (state) => ({...state, loading: true})
  ),
  on(
    BooksFinderActions.setBooks,
    (state, {books}) => ({...state, loading: false, entries: books})
  ),
  on(
    BooksFinderActions.fetchBooksFailed,
    BooksFinderActions.searchBooksFailed,
    (state) => ({...state, loading: false})
  )
);

export function booksFinderReducer(state: IBooksFinderState = initialState, action: Action): IBooksFinderState {
  return _booksFinderReducer(state, action);
}

