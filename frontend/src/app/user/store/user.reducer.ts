import {PageAccessLevel} from '@@user/models/page-access-level';
import {IUserState} from '@@user/models/i-user-state';
import {UserActions} from '@@user/store/user.actions';
import {Action, createReducer, on} from '@ngrx/store';

const initialState: IUserState = {
  observingUsername: null,
  pageAccessLevel: PageAccessLevel.READ_ONLY
};

const _userReducer = createReducer(initialState,
  on(
    UserActions.setObservingUsername,
    (state, {username}) => ({...state, observingUsername: username})
  )
);

export function userReducer(state: IUserState = initialState, action: Action) {
  return _userReducer(state, action);
}
