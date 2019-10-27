import {AuthState} from '@@auth/models/auth.state';
import {AuthActions} from '@@auth/store/auth.actions';
import {Action, createReducer, on} from '@ngrx/store';

const initialState: AuthState = {
  loggedInUser: null,
  pending: false
};

const _userDataReducer = createReducer(initialState,
  on(
    AuthActions.fetchLoggedInUserSucceed,
    AuthActions.loginSuccess,
    (state, {user}) => ({...state, loggedInUser: user, pending: false})
  ),
  on(
    AuthActions.fetchLoggedInUser,
    (state) => ({...state, pending: true})
  ),
  on(
    AuthActions.fetchLoggedInUserFailed,
    (state) => ({...state, loggedInUser: null, pending: false})
  )
);

export function authReducer(state: AuthState = initialState, action: Action): AuthState {
  return _userDataReducer(state, action);
}
