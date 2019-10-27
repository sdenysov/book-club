import {IScreenLockState} from '@@screen-lock/models/screen-lock-state.model';
import {SCREEN_LOCK_STORE_KEY} from '@@screen-lock/store/screen-lock-store.properties';
import {createFeatureSelector, createSelector} from '@ngrx/store';

const getState = createFeatureSelector<IScreenLockState>(SCREEN_LOCK_STORE_KEY);
const isScreenLocked = createSelector(getState, s => s.screenLocked);

export const ScreenLockSelectors = {
  getState,
  isScreenLocked
};
