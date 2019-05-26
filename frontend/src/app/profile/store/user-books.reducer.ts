import {ProfileStateModel} from '@@app/profile/models/profile-state.model';
import {UserBooksActionTypes, TUserBooksAction} from '@@app/profile/store/user-books.actions';

const initialState: ProfileStateModel = {
  loading: false,
  books: []
};

export function userBooksReducer(state: ProfileStateModel = initialState, action: TUserBooksAction): ProfileStateModel {
  switch (action.type) {
    case UserBooksActionTypes.FetchUserBooks: {
      return {...state, loading: true};
    }
    case UserBooksActionTypes.FetchUserBooksSucceed: {
      return {...state, loading: false, books: action.books};
    }
    case UserBooksActionTypes.FetchUserBooksFailed: {
      return {...state, loading: false};
    }
    default: {
      return state;
    }
  }
}
