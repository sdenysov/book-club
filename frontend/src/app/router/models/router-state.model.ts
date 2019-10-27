import * as routerStore from '@ngrx/router-store';

export type RouterStateSnapshot = routerStore.RouterReducerState<any>;

export interface IRouterState {
  state: RouterStateSnapshot;
  pending: boolean;
}
