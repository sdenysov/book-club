import {LogInPageComponent} from '@@auth/pages/login/log-in-page.component';
import {RegisterPageComponent} from '@@auth/pages/register/register-page.component';
import {AUTH_STORE_KEY} from '@@auth/store/auth-store.properties';
import {AuthEffects} from '@@auth/store/auth.effects';
import {authReducer} from '@@auth/store/auth.reducer';
import {AppShareModule} from '@@share/app-share.module';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

const SHARED_DECLARATIONS = [
  LogInPageComponent,
  RegisterPageComponent
];

@NgModule({
  imports: [
    AppShareModule,
    StoreModule.forFeature(AUTH_STORE_KEY, authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: SHARED_DECLARATIONS,
  exports: SHARED_DECLARATIONS
})
export class AppAuthModule {}
