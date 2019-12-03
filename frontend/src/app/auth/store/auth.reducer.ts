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
    (state, {user}) => ({...state, loggedInUser: user, loggedIn: Boolean(user)})
  ),
  on(
    AuthActions.logout,
    AuthActions.fetchLoggedInUserFailed,
    (state) => ({...state, pending: false, loggedInUser: null, loggedIn: false})
  ),
  on(
    AuthActions.fetchLoggedInUser,
    (state) => ({...state, pending: true})
  )
);

export function authReducer(state: IAuthState = initialState, action: Action): IAuthState {
  return _userDataReducer(state, action);
}
