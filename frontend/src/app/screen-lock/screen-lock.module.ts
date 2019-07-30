import {ScreenOverlayComponent} from '@@screen-lock/components/screen-overlay/screen-overlay.component';
import {screenLockReducer} from '@@screen-lock/store/screen-lock.reducer';
import {CommonModule} from '@angular/common';
import {Injector, NgModule, Optional, SkipSelf} from '@angular/core';
import {StoreModule} from '@ngrx/store';

const SHARED_DECLARATIONS = [ScreenOverlayComponent];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('screenLock', screenLockReducer)
  ],
  declarations: SHARED_DECLARATIONS,
  exports: SHARED_DECLARATIONS
})
export class AppScreenLockModule {

  static injector: Injector;

  constructor(@Optional() @SkipSelf() parentModule: AppScreenLockModule, private injector: Injector) {
    if (parentModule) {
      throw new Error('AppScreenLockModule is already loaded. Import only in AppModule');
    }
    AppScreenLockModule.injector = injector;
  }
}
