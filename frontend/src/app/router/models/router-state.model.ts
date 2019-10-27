import * as routerStore from '@ngrx/router-store';

export interface RouterState {
  state: routerStore.RouterReducerState<any>;
  routerInProgress: boolean;
}
