import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from '@@app/app.component';
import {AppRoutingModule} from '@@app/app-routing.module';
import {ShareModule} from '@@share/share.module';
import {AppMainPageModule} from '@@main/main-page.module';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {AppNavbar} from '@@app/nav-bar/navbar.module';
import {AppReduxModule} from '@@app/app-redux.module';
import {AppRouterStoreModule} from '@@router/router.module';
import {AppUserModule} from '@@user/user.module';
import {CoreModule} from '@@core/core.module';
import {AppLogInModule} from '@@app/login/login.module';

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
    AppNavbar,
    AppLogInModule
  ],
  providers: [
    {provide: 'api', useValue: 'api'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    console.log('environment', environment);
  }
}
