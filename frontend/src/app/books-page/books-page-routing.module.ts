import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppBooksPageComponent} from '@@books-page/components/book-page/books-page.component';

const routes: Routes = [
  {path: '', component: AppBooksPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppBooksPageRoutingModule {}
