import {RouterStateModel} from '@@router/models/router-state.model';
import {ROUTER, ROUTING_IN_PROGRESS} from '@@router/store/router-store.properties';
import * as routerStore from '@ngrx/router-store';
import {RouterStateSelectors} from '@ngrx/router-store/src/models';
import {createFeatureSelector} from '@ngrx/store';

const selectRouter = createFeatureSelector<RouterStateModel, routerStore.RouterReducerState<any>>(ROUTER);
const routerStateSelectors: RouterStateSelectors<RouterStateModel> = routerStore.getSelectors(selectRouter);
const isRoutingInProgress = createFeatureSelector<boolean>(ROUTING_IN_PROGRESS);

export const RouterSelectors = {
  ...routerStateSelectors,
  selectRouter,
  isRoutingInProgress
};
