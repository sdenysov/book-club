import {IBooksState} from '@@app/user-books/models/books-state.model';
import {BooksAction, BooksActionTypes} from '@@app/user-books/store/user-books.actions';

const initialState: IBooksState = {
  loading: false,
  entries: [],
  bookDetail: null
};

export function userBooksReducer(state: IBooksState = initialState, action: BooksAction): IBooksState {
  switch (action.type) {
    case BooksActionTypes.FetchBooks: {
      return {...state, loading: true};
    }
    case BooksActionTypes.FetchBooksSucceed: {
      return {...state, loading: false, entries: action.books};
    }
    case BooksActionTypes.FetchBooksFailed: {
      return {...state, loading: false};
    }
    case BooksActionTypes.FetchBookDetailSucceed: {
      return {...state, bookDetail: action.book};
    }
    default: {
      return state;
    }
  }
}
