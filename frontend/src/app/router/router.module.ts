import {ROUTER_STORE_KEY} from '@@router/store';
import {NgModule, Optional, Self} from '@angular/core';
import {Router} from '@angular/router';
import {routerReducer, RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {IRouterState} from '@@router/models/router-state';
import {routerInProgressReducer} from '@@router/store/router-in-progress.reducer';
import {CustomRouterStateSerializer} from '@@router/misc/custom-router-state-serializer';

const reducers: ActionReducerMap<IRouterState> = {
  state: routerReducer,
  routerInProgress: routerInProgressReducer
};

@NgModule({
  imports: [
    StoreModule.forFeature(ROUTER_STORE_KEY, reducers),
    StoreRouterConnectingModule.forRoot()
  ],
  exports: [
    StoreModule,
    StoreRouterConnectingModule
  ],
  providers: [
    {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer}
  ]
})
export class AppRouterStoreModule {

  constructor(@Self() @Optional() router: Router) {
    if (!router) {
      throw new Error('AppRouterStoreModule must be imported in the same level as RouterModule');
    }
  }
}
