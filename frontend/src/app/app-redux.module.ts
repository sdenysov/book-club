import {environment} from '@@env/environment';
import {routingStateReducer} from '@@router/store/routing-state.reducer';
import {IAppState} from '@@share/models/i-app-state';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {ActionReducerMap, MetaReducer, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

export const metaReducers: MetaReducer<{}>[] = !environment.production ? [] : [];

const reducers: ActionReducerMap<IAppState> = {
  routingInProgress: routingStateReducer
};

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: !environment.production,
        strictActionImmutability: !environment.production
      }
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
