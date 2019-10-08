import {createAction, props} from '@ngrx/store';

export enum UserActionTypes {
  SET_OBSERVING_USERNAME = '[User] set observing username'
}

export const UserActions = {
  setObservingUsername: createAction(UserActionTypes.SET_OBSERVING_USERNAME, props<{ username: string }>())
};
