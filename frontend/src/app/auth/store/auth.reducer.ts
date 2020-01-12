import {IAuthState} from '@@auth/models/IAuthState';
import {AuthActions} from '@@auth/store/auth.actions';
import {Action, createReducer, on} from '@ngrx/store';

const initialState: IAuthState = {
  user: null,
  loggedIn: false,
  pending: true
};

const _userDataReducer = createReducer(initialState,
  on(
    AuthActions.fetchUserSucceed,
    (state, {user}) => ({...state, pending: false, user, loggedIn: Boolean(user)})
  ),
  on(
    AuthActions.logout,
    AuthActions.fetchUserFailed,
    (state) => ({...state, pending: false, user: null, loggedIn: false})
  ),
  on(
    AuthActions.login,
    AuthActions.fetchUser,
    (state) => ({...state, pending: true})
  )
);

export function authReducer(state: IAuthState = initialState, action: Action): IAuthState {
  return _userDataReducer(state, action);
}
