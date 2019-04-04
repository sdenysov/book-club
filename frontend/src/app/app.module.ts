import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from '@@app/app.component';
import {AppRoutingModule} from '@@app/app-routing.module';
import {ShareModule} from '@@share-module/share.module';
import {AppMainPageModule} from '@@main-page/main-page.module';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {AppNavbar} from '@@app/nav-bar/components/navbar/navbar.module';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ShareModule,
    BrowserModule,
    HttpClientModule,
    AppMainPageModule,
    AppRoutingModule,
    AppNavbar,
    StoreModule.forRoot({})
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
