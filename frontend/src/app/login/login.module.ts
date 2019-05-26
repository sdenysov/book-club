import {NgModule} from '@angular/core';

import {AppLogInComponent} from './components/login.component';
import {ShareModule} from '@@share/share.module';

@NgModule({
  imports: [ShareModule],
  declarations: [AppLogInComponent],
  exports: [],
})
export class AppLogInModule {}
