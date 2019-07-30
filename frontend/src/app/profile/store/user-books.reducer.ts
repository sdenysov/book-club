import {ProfileStateModel} from '@@app/profile/models/profile-state.model';
import {UserBooksActionTypes, TUserBooksAction} from '@@app/profile/store/user-books.actions';

const initialState: ProfileStateModel = {
  loaded: false,
  loading: false,
  books: [],
  editingBook: null
};

export function userBooksReducer(state: ProfileStateModel = initialState, action: TUserBooksAction): ProfileStateModel {
  switch (action.type) {
    case UserBooksActionTypes.FetchUserBooks: {
      return {...state, loading: true, loaded: false};
    }
    case UserBooksActionTypes.FetchUserBooksSucceed: {
      return {...state, loading: false, loaded: true, books: action.books};
    }
    case UserBooksActionTypes.FetchUserBooksFailed: {
      return {...state, loading: false, loaded: false};
    }
    case UserBooksActionTypes.FetchEditingBookSucceed: {
      return {...state, editingBook: action.book};
    }
    default: {
      return state;
    }
  }
}
