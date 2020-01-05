import {AppShareModule} from '@@share/app-share.module';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {CoreEffects} from '@@core/store/core.effects';

/**
 * All services which have to have one instance per application should be implemented here.
 */

@NgModule({
  imports: [
    AppShareModule,
    EffectsModule.forFeature([CoreEffects])
  ],
  declarations: [],
  exports: []
})
export class CoreModule {}
