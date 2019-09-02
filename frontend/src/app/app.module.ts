import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {AppComponent} from '@@app/app.component';
import {AppRoutingModule} from '@@app/app-routing.module';
import {ShareModule} from '@@share/share.module';
import {AppMainPageModule} from '@@main/main-page.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppNavbar} from '@@app/nav-bar/navbar.module';
import {AppReduxModule} from '@@app/app-redux.module';
import {AppRouterStoreModule} from '@@router/router.module';
import {AppUserModule} from '@@user/user.module';
import {CoreModule} from '@@core/core.module';
import {AppLogInModule} from '@@app/login/login.module';
import {AppRegisterModule} from '@@app/register/register.module';
import {ErrorModule} from '@@app/errors/error.module';
import {GlobalErrorHandler} from '@@app/errors/services/global-error-handler';
import {ErrorHandlerInterceptor} from '@@app/errors/interceptors/error-handler-interceptor';
import {AppScreenLockModule} from '@@app/screen-lock/screen-lock.module';
import {AppTranslationModule} from '@@app/app-translation.module';

export const HTTP_INTERCEPTOR_PROVIDERS = [
  {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true}
];

@NgModule({

  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    ShareModule,
    BrowserModule,
    HttpClientModule,
    AppUserModule,
    AppReduxModule,
    AppMainPageModule,
    AppRoutingModule,
    AppRouterStoreModule,
    AppScreenLockModule,
    AppTranslationModule,
    AppNavbar,
    ErrorModule,
    AppLogInModule,
    AppRegisterModule,
  ],
  providers: [
    ...HTTP_INTERCEPTOR_PROVIDERS,
    {provide: 'api', useValue: 'api'},
    {provide: ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
