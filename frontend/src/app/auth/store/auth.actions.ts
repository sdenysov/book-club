import {Credentials} from '@@auth/models/credentials';
import {HttpErrorData} from '@@errors/models/http-error-data.model';
import {User} from '@@share/models/user';
import {createAction, props} from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[Auth] login',
  LOGIN_SUCCESS = '[Auth] login success',
  LOGIN_FAILED = '[Auth] login failed',

  FETCH_LOGGED_IN = '[Auth] fetch logged in user',
  FETCH_LOGGED_IN_SUCCEED = '[Auth] fetch logged in user succeed',
  FETCH_LOGGED_IN_FAILED = '[Auth] fetch logged in user failed'
}

const login = createAction(AuthActionTypes.LOGIN, props<{ credentials: Credentials }>());
const loginSuccess = createAction(AuthActionTypes.LOGIN_SUCCESS, props<{ user: User }>());
const loginFailed = createAction(AuthActionTypes.LOGIN_FAILED, props<{ error: Error | HttpErrorData }>());

const fetchLoggedInUser = createAction(AuthActionTypes.FETCH_LOGGED_IN);
const fetchLoggedInUserSucceed = createAction(AuthActionTypes.FETCH_LOGGED_IN_SUCCEED, props<{ user: User }>());
const fetchLoggedInUserFailed = createAction(AuthActionTypes.FETCH_LOGGED_IN_FAILED);

export const AuthActions = {
  login,
  loginSuccess,
  loginFailed,
  fetchLoggedInUser,
  fetchLoggedInUserSucceed,
  fetchLoggedInUserFailed
};
