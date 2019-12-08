import {IAuthState} from '@@auth/models/IAuthState';
import {AuthActions} from '@@auth/store/auth.actions';
import {Action, createReducer, on} from '@ngrx/store';

const initialState: IAuthState = {
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

export function authReducer(state: IAuthState = initialState, action: Action): IAuthState {
  return _userDataReducer(state, action);
}
