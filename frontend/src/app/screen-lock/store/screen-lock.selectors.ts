import {ScreenLockStateModel} from '@@screen-lock/models/screen-lock-state.model';
import {createFeatureSelector, createSelector} from '@ngrx/store';

const getState = createFeatureSelector<ScreenLockStateModel>('screenLock');
const isScreenLocked = createSelector(getState, s => s.screenLocked);

export const ScreenLockSelectors = {
  getState,
  isScreenLocked
};
