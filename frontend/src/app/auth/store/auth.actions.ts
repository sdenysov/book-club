import {Credentials} from '@@auth/models/credentials';
import {HttpErrorData} from '@@errors/models/http-error-data.model';
import {IUser} from '@@share/models/user';
import {createAction, props} from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[Auth] login',
  LOGIN_SUCCESS = '[Auth] login success',
  LOGIN_FAILED = '[Auth] login failed',
  FETCH_LOGGED_IN = '[Auth] fetch logged in user',
  FETCH_LOGGED_IN_SUCCEED = '[Auth] fetch logged in user succeed',
  FETCH_LOGGED_IN_FAILED = '[Auth] fetch logged in user failed',
  LOGOUT = '[Auth] logout'
}

export namespace AuthActions {
  export const login = createAction(AuthActionTypes.LOGIN, props<{ credentials: Credentials }>());
  export const loginSuccess = createAction(AuthActionTypes.LOGIN_SUCCESS);
  export const loginFailed = createAction(AuthActionTypes.LOGIN_FAILED, props<{ error: Error | HttpErrorData }>());
  export const fetchLoggedInUser = createAction(AuthActionTypes.FETCH_LOGGED_IN);
  export const fetchLoggedInUserSucceed = createAction(AuthActionTypes.FETCH_LOGGED_IN_SUCCEED, props<{ user: IUser }>());
  export const fetchLoggedInUserFailed = createAction(AuthActionTypes.FETCH_LOGGED_IN_FAILED);
  export const logout = createAction(AuthActionTypes.LOGOUT);
}

