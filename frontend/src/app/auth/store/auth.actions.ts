import {Credentials} from '@@auth/models/credentials';
import {HttpErrorData} from '@@errors/models/http-error-data.model';
import {IUser} from '@@share/models/user';
import {createAction, props} from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[Auth] login',
  LOGIN_SUCCESS = '[Auth] login success',
  LOGIN_FAILED = '[Auth] login failed',
  FETCH_LOGGED_IN = '[Auth] fetch user',
  FETCH_LOGGED_IN_SUCCEED = '[Auth] fetch user succeed',
  FETCH_LOGGED_IN_FAILED = '[Auth] fetch user failed',
  LOGOUT = '[Auth] logout'
}

export namespace AuthActions {
  export const login = createAction(AuthActionTypes.LOGIN, props<{ credentials: Credentials }>());
  export const loginSuccess = createAction(AuthActionTypes.LOGIN_SUCCESS);
  export const loginFailed = createAction(AuthActionTypes.LOGIN_FAILED, props<{ error: Error | HttpErrorData }>());
  export const fetchUser = createAction(AuthActionTypes.FETCH_LOGGED_IN);
  export const fetchUserSucceed = createAction(AuthActionTypes.FETCH_LOGGED_IN_SUCCEED, props<{ user: IUser }>());
  export const fetchUserFailed = createAction(AuthActionTypes.FETCH_LOGGED_IN_FAILED);
  export const logout = createAction(AuthActionTypes.LOGOUT);
}

