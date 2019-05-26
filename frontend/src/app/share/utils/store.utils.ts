import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';

export class StoreUtils {

  private static subscriptions = new WeakMap<Store<any>, Subscription>();
  private static currentStates = new WeakMap<Store<any>, any>();

  static getSync<TState, TResult>(store: Store<TState>, selector?: (state: TState) => TResult): TResult {
    if (!StoreUtils.subscriptions.get(store)) {
      StoreUtils.subscriptions.set(store, store.subscribe(data => {
        StoreUtils.currentStates.set(store, data);
      }));
    }
    const state = StoreUtils.currentStates.get(store);
    return selector ? selector(state) : state;
  }
}
