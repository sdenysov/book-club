import {ProfileStateModel} from '@@app/profile/models/profile-state.model';
import {ProfileBooksActionTypes, TProfileBooksAction} from '@@app/profile/store/profile-books.actions';

const initialState: ProfileStateModel = {
  loaded: false,
  loading: false,
  books: [],
  editingBook: null
};

export function ProfileBooksReducer(state: ProfileStateModel = initialState, action: TProfileBooksAction): ProfileStateModel {
  switch (action.type) {
    case ProfileBooksActionTypes.FetchProfileBooks: {
      return {...state, loading: true, loaded: false};
    }
    case ProfileBooksActionTypes.FetchProfileBooksSucceed: {
      return {...state, loading: false, loaded: true, books: action.books};
    }
    case ProfileBooksActionTypes.FetchProfileBooksFailed: {
      return {...state, loading: false, loaded: false};
    }
    case ProfileBooksActionTypes.FetchEditingBookSucceed: {
      return {...state, editingBook: action.book};
    }
    default: {
      return state;
    }
  }
}
