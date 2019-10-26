import {Credentials} from '@@auth/models/credentials';
import {HttpErrorData} from '@@errors/models/http-error-data.model';
import {User} from '@@share/models/user';
import {createAction, props} from '@ngrx/store';

export namespace AuthActions {

  export const login = createAction('[Auth] login', props<{ credentials: Credentials }>());
  export const loginSuccess = createAction('[Auth] login success', props<{ user: User }>());
  export const loginFailed = createAction('[Auth] login failed', props<{ error: Error | HttpErrorData }>());
  export const fetchLoggedInUser = createAction('[Auth] fetch logged in user');
  export const fetchLoggedInUserSucceed = createAction('[Auth] fetch logged in user succeed', props<{ user: User }>());
  export const fetchLoggedInUserFailed = createAction('[Auth] fetch logged in user failed');
}
