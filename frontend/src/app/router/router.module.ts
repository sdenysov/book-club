import {ROUTER} from '@@router/store/router-store.properties';
import {NgModule, Optional, Self} from '@angular/core';
import {Router} from '@angular/router';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {IRouterState} from '@@router/models/router-state.model';
import {routerInProgressReducer} from '@@router/store/router-in-progress.reducer';

const reducers: ActionReducerMap<IRouterState> = {
  state: routerReducer,
  routerInProgress: routerInProgressReducer
};

@NgModule({
  imports: [
    StoreModule.forFeature(ROUTER, reducers),
    StoreRouterConnectingModule.forRoot()
  ]
})
export class AppRouterStoreModule {

  constructor(@Self() @Optional() router: Router) {
    if (!router) {
      throw new Error('AppRouterStoreModule must be imported in the same level as RouterModule');
    }
  }
}
