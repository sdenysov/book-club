import {NavBarComponent} from '@@app/navigation/components/navbar/navbar.component';
import {NAVIGATION_STORE_KEY} from '@@app/navigation/store/navigation-store.properties';
import {navigationReducer} from '@@app/navigation/store/navigation.reducer';
import {NavigationEffects} from '@@navigation/store/navigation.effects';
import {AppShareModule} from '@@share/app-share.module';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

const SHARED_DECLARATIONS = [
  NavBarComponent
];

@NgModule({
  imports: [
    AppShareModule,
    StoreModule.forFeature(NAVIGATION_STORE_KEY, navigationReducer),
    EffectsModule.forFeature([NavigationEffects]),
    RouterModule
  ],
  declarations: SHARED_DECLARATIONS,
  exports: SHARED_DECLARATIONS
})
export class AppNavbarModule {}
