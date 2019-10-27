import {IRouterState} from '@@router/models/IRouterState';
import {ROUTER} from '@@router/store/router-store.properties';
import * as routerStore from '@ngrx/router-store';
import {RouterStateSelectors} from '@ngrx/router-store/src/models';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export namespace RouterSelectors {
  export const router = createFeatureSelector<IRouterState>(ROUTER);
  export const pending = createSelector(router, (state: IRouterState) => state.pending);
  export const routerState = createSelector(router, (state: IRouterState) => state.state);
  export const {
    selectUrl,
    selectCurrentRoute,
    selectRouteData,
    selectQueryParam,
    selectQueryParams,
    selectRouteParam,
    selectRouteParams
  } = routerStore.getSelectors(routerState) as RouterStateSelectors<IRouterState>;
}

