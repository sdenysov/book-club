import {createAction, props} from '@ngrx/store';

export const UserActions = {
  setObservingUsername: createAction('[User] set observing username', props<{ username: string }>())
};
