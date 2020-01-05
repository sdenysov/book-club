import {IAuthState} from '@@auth/models/IAuthState';
import {AuthActions} from '@@auth/store/auth.actions';
import {Action, createReducer, on} from '@ngrx/store';
import {User} from '@@user/models/user';

const initialState: IAuthState = {
  user: new User({role: 'guest', username: 'guest'}),
  loggedIn: false,
  pending: true
};

const _userDataReducer = createReducer(initialState,
  on(
    AuthActions.fetchUserSucceed,
    (state, {user}) => ({...state, pending: false, user: new User(user), isLoggedIn: Boolean(user)})
  ),
  on(
    AuthActions.logout,
    AuthActions.fetchUserFailed,
    (state) => ({...state, pending: false, user: null, isLoggedIn: false})
  ),
  on(
    AuthActions.fetchUser,
    (state) => ({...state, pending: true})
  )
);

export function authReducer(state: IAuthState = initialState, action: Action): IAuthState {
  return _userDataReducer(state, action);
}
