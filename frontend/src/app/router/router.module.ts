import {ROUTER, ROUTING_IN_PROGRESS} from '@@router/store/router-store.properties';
import {routingInProgressReducer} from '@@router/store/routing-in-progress.reducer';
import {NgModule, Optional, Self} from '@angular/core';
import {Router} from '@angular/router';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';

@NgModule({
  imports: [
    StoreModule.forFeature(ROUTER, routerReducer),
    StoreModule.forFeature(ROUTING_IN_PROGRESS, routingInProgressReducer),
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
