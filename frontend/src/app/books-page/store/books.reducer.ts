import {BooksStateModel} from '@@books-page/models/books-state.model';
import {BooksActions, BooksActionTypes} from '@@books-page/store/books.actions';

const initialState: BooksStateModel = {
  loading: false,
  entries: []
};

export function booksReducer(state: BooksStateModel = initialState, action: BooksActionTypes): BooksStateModel {
  switch (action.type) {
    case BooksActions.FetchBooks: {
      console.log('FetchBooks');
      return {...state, loading: true};
    }
    case BooksActions.FetchBooksSucceed: {
      console.log('FetchBooksSucceed');
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
