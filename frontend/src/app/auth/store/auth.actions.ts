import {User} from '@@share/models/user';
import {createAction, props} from '@ngrx/store';

export enum AuthActionTypes {
  SET_LOGGED_IN_USER = '[Auth] set logged in user',
  FETCH_LOGGED_IN = '[Auth] fetch logged in user',
  FETCH_LOGGED_IN_SUCCEED = '[Auth] fetch logged in user succeed',
  FETCH_LOGGED_IN_FAILED = '[Auth] fetch logged in user failed'
}

const setLoggedInUser = createAction(AuthActionTypes.SET_LOGGED_IN_USER, props<{ user: User }>());
const fetchLoggedInUser = createAction(AuthActionTypes.FETCH_LOGGED_IN);
const fetchLoggedInUserSucceed = createAction(AuthActionTypes.FETCH_LOGGED_IN_SUCCEED, props<{ user: User }>());
const fetchLoggedInUserFailed = createAction(AuthActionTypes.FETCH_LOGGED_IN_FAILED);

export const AuthActions = {
  setLoggedInUser,
  fetchLoggedInUser,
  fetchLoggedInUserSucceed,
  fetchLoggedInUserFailed
};
