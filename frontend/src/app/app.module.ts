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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AbilityModule} from '@casl/angular';
import {Ability} from '@casl/ability';
import {AbilityService} from '@@auth/services/ability.service';
import {AppSharedModule} from '@@shared/app-shared.module';
import {AppTranslationModule} from '@@app/app-translation.module';
import {RatingModule} from 'ngx-bootstrap';
import {AppBooksModule} from '@@books/books.module';

export const HTTP_INTERCEPTOR_PROVIDERS = [
  {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true}
];

@NgModule({
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    AppAuthModule,
    AppNavigationModule,
    AppErrorModule,
    AppSharedModule,
    AppReduxModule,
    AppRoutingModule,
    AppScreenLockModule,
    AppRouterStoreModule,
    AbilityModule.forRoot(),
    AppTranslationModule,
    RatingModule.forRoot(),
    AppBooksModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ...HTTP_INTERCEPTOR_PROVIDERS,
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    {provide: Ability, useValue: AbilityService.guestAbilities}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
