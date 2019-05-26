import {NgModule} from '@angular/core';
import {ShareModule} from '@@share/share.module';

/**
 * All services which have to have one instance per application should be implemented here.
 */

@NgModule({
  imports: [
    ShareModule
  ],
  declarations: [],
  exports: []
})
export class CoreModule {}
