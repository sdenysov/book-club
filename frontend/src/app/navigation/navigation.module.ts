import {AppNavbarComponent} from '@@app/navigation/components/navbar/navbar.component';
import {NAVIGATION_STORE_KEY} from '@@app/navigation/store/navigation-store.properties';
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
    StoreModule.forFeature(NAVIGATION_STORE_KEY, {}),
    RouterModule
  ],
  declarations: SHARED_DECLARATIONS,
  exports: SHARED_DECLARATIONS
})
export class AppNavigationModule {}
