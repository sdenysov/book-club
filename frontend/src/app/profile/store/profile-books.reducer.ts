import {IProfileState} from '@@app/profile/models/profile.state.model';
import {ProfileBooksActionTypes, TProfileBooksAction} from '@@app/profile/store/profile-books.actions';

const initialState: IProfileState = {
  loaded: false,
  loading: false,
  books: []
};

export function profileBooksReducer(state: IProfileState = initialState, action: TProfileBooksAction): IProfileState {
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
