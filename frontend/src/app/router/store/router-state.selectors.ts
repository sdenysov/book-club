import {RouterStateModel} from '@@router/models/router-state.model';
import {ROUTER, ROUTING_IN_PROGRESS} from '@@router/store/router-store.properties';
import {RouterReducerState} from '@ngrx/router-store';
import {createFeatureSelector, createSelector} from '@ngrx/store';

const getRouterReducerState = createFeatureSelector<RouterReducerState<RouterStateModel>>(ROUTER);
const getRouterState = createSelector(getRouterReducerState, s => s.state);
const getRouterStateUrl = createSelector(getRouterState, s => s.url);
const getRouterStateData = createSelector(getRouterState, s => s.data);
const getRouterStateParams = createSelector(getRouterState, s => s.params);
const getRouterStateQueryParams = createSelector(getRouterState, s => s.queryParams);
const isRoutingInProgress = createFeatureSelector<boolean>(ROUTING_IN_PROGRESS);

export const RouterStateSelectors = {
  getRouterReducerState,
  getRouterState,
  getRouterStateUrl,
  getRouterStateData,
  getRouterStateParams,
  getRouterStateQueryParams,
  isRoutingInProgress
};
