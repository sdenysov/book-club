import {AppShareModule} from '@@share/app-share.module';
import {USER_STORE_KEY} from '@@user/store/user-store.properties';
import {UserEffects} from '@@user/store/user.effects';
import {userReducer} from '@@user/store/user.reducer';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

@NgModule({
  imports: [
    AppShareModule,
    StoreModule.forFeature(USER_STORE_KEY, userReducer),
    EffectsModule.forFeature([UserEffects]),
  ]
})
export class AppUserModule {}
