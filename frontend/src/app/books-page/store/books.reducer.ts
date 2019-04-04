import {BooksStateModel} from '@@books-page/models/books-state.model';
import {BooksActions, BooksActionTypes} from '@@books-page/store/books.actions';

const initialState: BooksStateModel = {
  entries: []
};

export function booksReducer(state: BooksStateModel = initialState, action: BooksActionTypes): BooksStateModel {
  switch (action.type) {
    case BooksActions.FetchBooksSucceed: {
        return {...state, entries: action.books};
      }
    default: {
      return state;
    }
  }
}
