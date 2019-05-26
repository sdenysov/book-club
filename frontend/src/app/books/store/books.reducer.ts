import {BooksStateModel} from '@@books/models/books-state.model';
import {BooksActions, BooksActionTypes} from '@@books/store/books.actions';

const initialState: BooksStateModel = {
  loading: false,
  entries: []
};

export function booksReducer(state: BooksStateModel = initialState, action: BooksActionTypes): BooksStateModel {
  switch (action.type) {
    case BooksActions.FetchBooks: {
      return {...state, loading: true};
    }
    case BooksActions.FetchBooksSucceed: {
      return {...state, loading: false, entries: action.books};
    }
    case BooksActions.FetchBooksFailed: {
      return {...state, loading: false};
    }
    default: {
      return state;
    }
  }
}
