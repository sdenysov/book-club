import {NgModule} from '@angular/core';
import {AppMainPageComponent} from '@@main-page/components/main-page/main-page.component';

const SHARE_DECLARATIONS = [
  AppMainPageComponent
];

@NgModule({
  imports: [],
  declarations: SHARE_DECLARATIONS,
  exports: SHARE_DECLARATIONS
})
export class AppMainPageModule {}
