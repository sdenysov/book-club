import {IAuthState} from '@@auth/models/auth-state.model';
import {AuthActions} from '@@auth/store/auth.actions';
import {Action, createReducer, on} from '@ngrx/store';

const initialState: IAuthState = {
  loggedInUser: null,
  loggedIn: false,
  pending: true
};

const _userDataReducer = createReducer(initialState,
  on(
    AuthActions.fetchLoggedInUserSucceed,
    (state, {user}) => ({...state, loggedInUser: user})
  ),
  on(
    AuthActions.logout,
    AuthActions.fetchLoggedInUserFailed,
    (state) => ({...state, loggedInUser: null})
  ),
  on(
    AuthActions.setLoggedInStatus,
    (state, {loggedIn}) => ({...state, loggedIn, pending: false})
  )
);

export function authReducer(state: IAuthState = initialState, action: Action): IAuthState {
  return _userDataReducer(state, action);
}
