import {AppShareModule} from '@@share/app-share.module';
import {NgModule} from '@angular/core';

/**
 * All services which have to have one instance per application should be implemented here.
 */

@NgModule({
  imports: [
    AppShareModule
  ],
  declarations: [],
  exports: []
})
export class CoreModule {}
