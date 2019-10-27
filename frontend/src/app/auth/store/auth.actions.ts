import {ICredentials} from '@@auth/models/ICredentials';
import {HttpErrorData} from '@@errors/models/http-error-data.model';
import {IUser} from '@@share/models/IUser';
import {createAction, props} from '@ngrx/store';

export namespace AuthActions {

  export const login = createAction('[Auth] login', props<{ credentials: ICredentials }>());
  export const loginSuccess = createAction('[Auth] login success', props<{ user: IUser }>());
  export const loginFailed = createAction('[Auth] login failed', props<{ error: Error | HttpErrorData }>());
  export const fetchLoggedInUser = createAction('[Auth] fetch logged in user');
  export const fetchLoggedInUserSucceed = createAction('[Auth] fetch logged in user succeed', props<{ user: IUser }>());
  export const fetchLoggedInUserFailed = createAction('[Auth] fetch logged in user failed');
}
