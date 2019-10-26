import {RouterState} from '@@router/models/router.state';
import {ROUTER} from '@@router/store/router-store.properties';
import * as routerStore from '@ngrx/router-store';
import {RouterStateSelectors} from '@ngrx/router-store/src/models';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export namespace RouterSelectors {
  export const router = createFeatureSelector<RouterState>(ROUTER);
  export const pending = createSelector(router, (state: RouterState) => state.pending);
  export const routerState = createSelector(router, (state: RouterState) => state.state);
  export const {
    selectUrl,
    selectCurrentRoute,
    selectRouteData,
    selectQueryParam,
    selectQueryParams,
    selectRouteParam,
    selectRouteParams
  } = routerStore.getSelectors(routerState) as RouterStateSelectors<RouterState>;
}

