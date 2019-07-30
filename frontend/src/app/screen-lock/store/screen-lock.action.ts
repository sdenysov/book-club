import {Action} from '@ngrx/store';

export enum ScreenLockActionTypes {
  IncrementPendingRequestsCounter = '[ScreenLock] Increment pending requests counter',
  DecrementPendingRequestsCounter = '[ScreenLock] Decrement pending requests counter',
  UnlockScreen = '[ScreenLock] Unlock screen'
}

export class IncrementPendingRequestsCounter implements Action {
  readonly type = ScreenLockActionTypes.IncrementPendingRequestsCounter;
}

export class DecrementPendingRequestsCounter implements Action {
  readonly type = ScreenLockActionTypes.DecrementPendingRequestsCounter;
}

export class UnlockScreen implements Action {
  readonly type = ScreenLockActionTypes.UnlockScreen;
}

export const ScreenLockActions = {
  IncrementPendingRequestsCounter,
  DecrementPendingRequestsCounter,
  UnlockScreen
};

export type ScreenLockAction =
  | IncrementPendingRequestsCounter
  | DecrementPendingRequestsCounter
  | UnlockScreen
  ;
