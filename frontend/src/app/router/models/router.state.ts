import * as routerStore from '@ngrx/router-store';

export type RouterStateSnapshot = routerStore.RouterReducerState<any>;

export interface RouterState {
  state: RouterStateSnapshot;
  pending: boolean;
}
