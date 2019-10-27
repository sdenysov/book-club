import {ProfileState} from '@@app/profile/models/profile.state.model';
import {ProfileBooksActionTypes, TProfileBooksAction} from '@@app/profile/store/profile-books.actions';

const initialState: ProfileState = {
  loaded: false,
  loading: false,
  books: []
};

export function profileBooksReducer(state: ProfileState = initialState, action: TProfileBooksAction): ProfileState {
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
    default: {
      return state;
    }
  }
}
