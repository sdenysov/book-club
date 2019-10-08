import {PageAccessLevel} from '@@user/models/page-access-level';
import {UserState} from '@@user/models/user-state';
import {UserActions} from '@@user/store/user.actions';
import {Action, createReducer, on} from '@ngrx/store';

const initialState: UserState = {
  observingUsername: null,
  pageAccessLevel: PageAccessLevel.READ_ONLY
};

const _userReducer = createReducer(initialState,
  on(
    UserActions.setObservingUsername,
    (state, {username}) => ({...state, observingUsername: username})
  )
);

export function userReducer(state: UserState = initialState, action: Action) {
  return _userReducer(state, action);
}
