import {RouterReducerState} from '@ngrx/router-store';
import {IRouterStateUrl} from '@@router/models/router-state-url';

export interface IRouterState {
  state: RouterReducerState<IRouterStateUrl>;
  routerInProgress: boolean;
}
