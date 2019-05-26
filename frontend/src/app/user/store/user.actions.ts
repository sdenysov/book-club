import {Action} from '@ngrx/store';
import {UserModel} from '@@user/models/user.model';

export enum UserActionTypes {
  FetchCurrentUser = '[User] Fetch current user',
  FetchCurrentUserSucceed = '[User] Fetch current user succeed',
  FetchCurrentUserFailed = '[User] Fetch current user failed'
}

export class FetchCurrentUser implements Action {
  readonly type = UserActionTypes.FetchCurrentUser;
}

export class FetchCurrentUserSucceed implements Action {
  readonly type = UserActionTypes.FetchCurrentUserSucceed;

  constructor(public currentUser: UserModel) {}
}

export class FetchCurrentUserFailed implements Action {
  readonly type = UserActionTypes.FetchCurrentUserFailed;

  constructor(public error: Error) {}
}

export const UserActions = {
  FetchCurrentUser,
  FetchCurrentUserSucceed,
  FetchCurrentUserFailed
};

export type TUserAction =
  | FetchCurrentUser
  | FetchCurrentUserSucceed
  | FetchCurrentUserFailed
  ;
