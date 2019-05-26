import {RouterStateModel} from '@@router/models/router-state.model';
import {RouterReducerState} from '@ngrx/router-store';
import {createFeatureSelector, createSelector} from '@ngrx/store';

const getRouterReducerState = createFeatureSelector<RouterReducerState<RouterStateModel>>('router');
const getRouterState = createSelector(getRouterReducerState, s => s.state);
const getRouterStateUrl = createSelector(getRouterState, s => s.url);
const getRouterStateData = createSelector(getRouterState, s => s.data);
const getRouterStateParams = createSelector(getRouterState, s => s.params);
const getRouterStateQueryParams = createSelector(getRouterState, s => s.queryParams);

export const RouterStateSelectors = {
  getRouterReducerState,
  getRouterState,
  getRouterStateUrl,
  getRouterStateData,
  getRouterStateParams,
  getRouterStateQueryParams
};
