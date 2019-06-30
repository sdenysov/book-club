import {NgModule} from '@angular/core';

import {AppRegisterComponent} from './components/register.component';
import {ShareModule} from '@@share/share.module';

@NgModule({
  imports: [ShareModule],
  declarations: [AppRegisterComponent],
  exports: [],
})
export class AppRegisterModule {}
