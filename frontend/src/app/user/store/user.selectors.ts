import {UserState} from '@@user/models/user-state';
import {USER_STORE_KEY} from '@@user/store/user-store.properties';
import {createFeatureSelector, createSelector} from '@ngrx/store';

const userState = createFeatureSelector<UserState>(USER_STORE_KEY);
const getObservingUsername = createSelector(userState, state => state.observingUsername);
const getPageAccessLevel = createSelector(userState, state => state.pageAccessLevel);

export const UserSelectors = {
  userState,
  getObservingUsername,
  getPageAccessLevel
};
