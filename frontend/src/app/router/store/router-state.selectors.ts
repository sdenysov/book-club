import {ROUTER} from '@@router/store/router-store.properties';
import * as routerStore from '@ngrx/router-store';
import {RouterStateSelectors} from '@ngrx/router-store/src/models';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {RouterState} from '@@router/models/router-state.model';

export namespace RouterSelectors {
  export const selectRouter = createFeatureSelector<RouterState>(ROUTER);
  export const selectRouterState = createSelector(selectRouter, s => s.state);
  export const isRoutingInProgress = createSelector(selectRouter, s => s.routerInProgress);
  export const {
    selectCurrentRoute,
    selectQueryParam,
    selectQueryParams,
    selectRouteData,
    selectRouteParam,
    selectRouteParams,
    selectUrl
  }: RouterStateSelectors<RouterState> = routerStore.getSelectors(selectRouterState);
}
