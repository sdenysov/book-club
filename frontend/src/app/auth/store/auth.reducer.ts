import {IAuthState} from '@@auth/models/auth-state.model';
import {AuthActions} from '@@auth/store/auth.actions';
import {Action, createReducer, on} from '@ngrx/store';

const initialState: IAuthState = {
  loggedInUser: null,
  loggedInUserLoaded: false
};

const _userDataReducer = createReducer(initialState,
  on(
    AuthActions.fetchLoggedInUserSucceed,
    AuthActions.loginSuccess,
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

export function authReducer(state: IAuthState = initialState, action: Action): IAuthState {
  return _userDataReducer(state, action);
}
