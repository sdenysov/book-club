import {environment} from '@@env/environment';
import {NgModule} from '@angular/core';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {storeFreeze} from 'ngrx-store-freeze';
import {EffectsModule} from '@ngrx/effects';

export const metaReducers: MetaReducer<{}>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
  imports: [
    StoreModule.forRoot({}, {metaReducers}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'book-club',
      maxAge: 25,
      logOnly: environment.production
    })
  ]
})
export class AppReduxModule {}
