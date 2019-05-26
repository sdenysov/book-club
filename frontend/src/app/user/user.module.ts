import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {userReducer} from '@@user/store/user.reducer';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from '@@user/store/user.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects]),
  ]
})
export class AppUserModule {}
