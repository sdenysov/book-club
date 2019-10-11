import {User} from '@@share/models/user';
import {createAction, props} from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN_SUCCESS = '[Auth] login success',
  FETCH_LOGGED_IN = '[Auth] fetch logged in user',
  FETCH_LOGGED_IN_SUCCEED = '[Auth] fetch logged in user succeed',
  FETCH_LOGGED_IN_FAILED = '[Auth] fetch logged in user failed'
}

const loginSuccess = createAction(AuthActionTypes.LOGIN_SUCCESS, props<{ user: User }>());
const fetchLoggedInUser = createAction(AuthActionTypes.FETCH_LOGGED_IN);
const fetchLoggedInUserSucceed = createAction(AuthActionTypes.FETCH_LOGGED_IN_SUCCEED, props<{ user: User }>());
const fetchLoggedInUserFailed = createAction(AuthActionTypes.FETCH_LOGGED_IN_FAILED);

export const AuthActions = {
  loginSuccess,
  fetchLoggedInUser,
  fetchLoggedInUserSucceed,
  fetchLoggedInUserFailed
};
