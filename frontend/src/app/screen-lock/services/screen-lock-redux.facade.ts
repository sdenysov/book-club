import {ScreenLockStateModel} from '@@screen-lock/models/screen-lock-state.model';
import {ScreenLockActions} from '@@screen-lock/store/screen-lock.action';
import {ScreenLockSelectors} from '@@screen-lock/store/screen-lock.selectors';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ScreenLockReduxFacade {

  constructor(private store: Store<ScreenLockStateModel>) {}

  isScreenLocked$: Observable<boolean> = this.store.pipe(select(ScreenLockSelectors.isScreenLocked));

  unlockScreen() {
    this.store.dispatch(new ScreenLockActions.UnlockScreen());
  }

  incrementPendingRequestsCounter() {
    this.store.dispatch(new ScreenLockActions.IncrementPendingRequestsCounter());
  }

  decrementPendingRequestsCounter() {
    this.store.dispatch(new ScreenLockActions.DecrementPendingRequestsCounter());
  }
}
