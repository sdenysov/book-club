import {AppReduxModule} from '@@app/app-redux.module';
import {AppRoutingModule} from '@@app/app-routing.module';
import {AppComponent} from '@@app/app.component';
import {ErrorHandlerInterceptor} from '@@app/errors/interceptors/error-handler-interceptor';
import {GlobalErrorHandler} from '@@app/errors/services/global-error-handler';
import {AppNavigationModule} from '@@app/navigation/navigation.module';
import {AppScreenLockModule} from '@@app/screen-lock/screen-lock.module';
import {AppAuthModule} from '@@auth/auth.module';
import {CoreModule} from '@@core/core.module';
import {AppErrorModule} from '@@errors/app-error.module';
import {AppRouterStoreModule} from '@@router/router.module';
import {AppShareModule} from '@@share/app-share.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

export const HTTP_INTERCEPTOR_PROVIDERS = [
  {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true}
];

@NgModule({
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    AppNavigationModule,
    AppErrorModule,
    AppShareModule,
    AppReduxModule,
    AppRoutingModule,
    AppScreenLockModule,
    AppRouterStoreModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ...HTTP_INTERCEPTOR_PROVIDERS,
    {provide: ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
