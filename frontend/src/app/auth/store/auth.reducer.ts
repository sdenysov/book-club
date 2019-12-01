import {AuthState} from '@@auth/models/auth.state';
import {AuthActions} from '@@auth/store/auth.actions';
import {Action, createReducer, on} from '@ngrx/store';

const initialState: AuthState = {
  loggedInUser: null,
  isLoggedIn: false,
  pending: true
};

const _userDataReducer = createReducer(initialState,
  on(
    AuthActions.fetchLoggedInUserSucceed,
    (state, {user}) => ({...state, pending: false, loggedInUser: user, isLoggedIn: Boolean(user)})
  ),
  on(
    AuthActions.logout,
    AuthActions.fetchLoggedInUserFailed,
    (state) => ({...state, pending: false, loggedInUser: null, isLoggedIn: false})
  ),
  on(
    AuthActions.fetchLoggedInUser,
    (state) => ({...state, pending: true})
  )
);

export function authReducer(state: AuthState = initialState, action: Action): AuthState {
  return _userDataReducer(state, action);
}
