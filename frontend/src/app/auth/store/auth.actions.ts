import {Credentials} from '@@auth/models/credentials';
import {HttpErrorData} from '@@errors/models/http-error-data.model';
import {IUser} from '@@share/models/user';
import {createAction, props} from '@ngrx/store';

export namespace AuthActions {
  const LOGIN = '[Auth] login';
  const LOGIN_SUCCESS = '[Auth] login success';
  const LOGIN_FAILED = '[Auth] login failed';
  const FETCH_LOGGED_IN = '[Auth] fetch logged in user';
  const FETCH_LOGGED_IN_SUCCEED = '[Auth] fetch logged in user succeed';
  const FETCH_LOGGED_IN_FAILED = '[Auth] fetch logged in user failed';
  const LOGOUT = '[Auth] logout';

  export const login = createAction(LOGIN, props<{ credentials: Credentials }>());
  export const loginSuccess = createAction(LOGIN_SUCCESS);
  export const loginFailed = createAction(LOGIN_FAILED, props<{ error: Error | HttpErrorData }>());
  export const fetchLoggedInUser = createAction(FETCH_LOGGED_IN);
  export const fetchLoggedInUserSucceed = createAction(FETCH_LOGGED_IN_SUCCEED, props<{ user: IUser }>());
  export const fetchLoggedInUserFailed = createAction(FETCH_LOGGED_IN_FAILED);
  export const logout = createAction(LOGOUT);
}

