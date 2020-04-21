import {BooksState} from '@@user/models/books-state.model';
import {UserBooksAction, BooksActionTypes} from '@@user/store/user-books.actions';

const initialState: BooksState = {
  loading: false,
  entries: [],
  bookDetail: null
};

export function userBooksReducer(state: BooksState = initialState, action: UserBooksAction): BooksState {
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
