import {environment} from '@@env/environment';
import {routingInProgressReducer} from '@@router/store/routing-in-progress.reducer';
import {AppStateModel} from '@@share/models/app-state.model';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {ActionReducerMap, MetaReducer, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

export const metaReducers: MetaReducer<{}>[] = !environment.production ? [] : [];

const reducers: ActionReducerMap<AppStateModel> = {
  routingInProgress: routingInProgressReducer
};

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {strictStateImmutability: true, strictActionImmutability: true}
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'book-club',
      maxAge: 25,
      logOnly: environment.production
    })
  ]
})
export class AppReduxModule {}
