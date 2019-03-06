import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from '@@app/app.component';
import {AppNavbarComponent} from '@@app/components/navbar/navbar.component';
import {AppBookComponent} from '@@app/components/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppBookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
