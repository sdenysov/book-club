import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from '@@app/app.component';
import {AppRoutingModule} from '@@app/app-routing.module';
import {ShareModule} from '@@share-module/share.module';
import {AppMainPageModule} from '@@main-page/main-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ShareModule,
    BrowserModule,
    AppMainPageModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
