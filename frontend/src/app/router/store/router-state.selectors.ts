import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IRouterStateUrl} from '@@router/models/router-state-url';
import {IRouterState} from '@@router/models/router-state';

const empty = {
  url: undefined,
  queryParams: {},
  params: {},
  data: {}
} as IRouterStateUrl;

export namespace RouterSelectors {
  export const getRouterState = createFeatureSelector<IRouterState>('router');
  export const isRoutingInProgress = createSelector(getRouterState, s => s.routerInProgress);
  export const getRouterReducerState = createSelector(getRouterState, s => s && s.state && s.state.state);
  export const getCurrentRoute = createSelector(getRouterReducerState, s => s ? s.url : empty.url);
  export const getRouterStateData = createSelector(getRouterReducerState, s => s ? s.data : empty.data);
  export const getRouteParam = (param: string) => createSelector(getRouterReducerState, s => s && s.params && s.params[param]);
  export const getRouterStateQueryParams = createSelector(getRouterReducerState, s => s ? s.queryParams : empty.queryParams);
}
