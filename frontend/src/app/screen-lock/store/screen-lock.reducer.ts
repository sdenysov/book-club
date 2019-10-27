import {IScreenLockState} from '@@screen-lock/models/screen-lock-state.model';
import {ScreenLockAction, ScreenLockActionTypes} from '@@screen-lock/store/screen-lock.action';

export const initialState: IScreenLockState = {
  pendingRequestsCount: 0,
  screenLocked: false
};

export function screenLockReducer(state = initialState, action: ScreenLockAction): IScreenLockState {
  switch (action.type) {
    case ScreenLockActionTypes.IncrementPendingRequestsCounter: {
      const pendingRequestsCount = state.pendingRequestsCount + 1;
      return {...state, pendingRequestsCount, screenLocked: true};
    }
    case ScreenLockActionTypes.DecrementPendingRequestsCounter: {
      const pendingRequestsCount = Math.max(0, state.pendingRequestsCount - 1);
      return {...state, pendingRequestsCount, screenLocked: pendingRequestsCount > 0};
    }
    case ScreenLockActionTypes.UnlockScreen: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
