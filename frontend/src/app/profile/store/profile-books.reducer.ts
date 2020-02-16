import {ProfileState} from '@@app/profile/models/profile.state.model';
import {ProfileBooksActions} from '@@app/profile/store/profile-books.actions';
import {Action, createReducer, on} from '@ngrx/store';

const initialState: ProfileState = {
  loaded: false,
  loading: false,
  books: [],
  user: null,
};

const _profileBooksReducer = createReducer(initialState,
  on(ProfileBooksActions.fetchProfileBooks,
    (state) => ({...state, loading: true, loaded: false})),
  on(ProfileBooksActions.fetchProfileBooksSucceed,
    (state, {books}) => ({...state, loading: true, loaded: false, books: books})),
  on(ProfileBooksActions.fetchProfileBooksFailed,
    (state) => ({...state, loading: false, loaded: false})),
  on(ProfileBooksActions.fetchUserProfile,
    (state) => ({...state, loading: true, loaded: false})),
  on(ProfileBooksActions.fetchUserProfileSucceed,
    (state, {userProfile}) => ({...state, loading: false, loaded: true, user: userProfile})),
);

export function profileBooksReducer(state: ProfileState = initialState, action: Action): ProfileState {
  return _profileBooksReducer(state, action);
}
