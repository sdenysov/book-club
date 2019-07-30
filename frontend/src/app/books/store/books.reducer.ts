import {BooksStateModel} from '@@books/models/books-state.model';
import {BooksActions, BooksActionTypes, TBooksAction} from '@@books/store/books.actions';
import {UserBooksActionTypes} from '@@app/profile/store/user-books.actions';

const initialState: BooksStateModel = {
  loading: false,
  entries: [],
  bookDetail: null
};

export function booksReducer(state: BooksStateModel = initialState, action: TBooksAction): BooksStateModel {
  switch (action.type) {
    case BooksActionTypes.FetchBooks: {
      return {...state, loading: true};
    }
    case BooksActionTypes.FetchBooksSucceed: {
      console.log(action.books);
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
