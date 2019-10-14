import {AppNavbarComponent} from '@@app/nav-bar/components/navbar/navbar.component';
import {NAV_BAR_STORE_KEY} from '@@app/nav-bar/store/nav-bar-store.properties';
import {AppShareModule} from '@@share/app-share.module';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';

const SHARED_DECLARATIONS = [
  AppNavbarComponent
];

@NgModule({
  imports: [
    AppShareModule,
    StoreModule.forFeature(NAV_BAR_STORE_KEY, null),
    RouterModule
  ],
  declarations: SHARED_DECLARATIONS,
  exports: SHARED_DECLARATIONS
})
export class AppNavBar {}
