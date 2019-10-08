import {AuthState} from '@@auth/models/auth.state';
import {AuthActions} from '@@auth/store/auth.actions';
import {Action, createReducer, on} from '@ngrx/store';

const initialState: AuthState = {
  loggedInUser: null,
  loggedInUserLoaded: false
};

const _userDataReducer = createReducer(initialState,
  on(
    AuthActions.fetchLoggedInUserSucceed,
    AuthActions.setLoggedInUser,
    (state, {user}) => ({...state, loggedInUser: user, loggedInUserLoaded: true})
  ),
  on(
    AuthActions.fetchLoggedInUserFailed,
    (state) => ({...state, loggedInUser: null, loggedInUserLoaded: true})
  ),
  on(
    AuthActions.fetchLoggedInUserFailed,
    (state) => ({...state, loggedInUser: null, loggedInUserLoaded: true})
  )
);

export function authReducer(state: AuthState = initialState, action: Action): AuthState {
  return _userDataReducer(state, action);
}
