import * as routerStore from '@ngrx/router-store';

export interface IRouterState {
  state: routerStore.RouterReducerState<any>;
  routerInProgress: boolean;
}
