import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppBooksPageComponent} from '@@books-page/components/book-page/books-page.component';
import {AppBookDetailComponent} from '@@books-page/components/book-detail/book-detail.component';

const routes: Routes = [
  {path: '', component: AppBooksPageComponent},
  {path: ':id', component:  AppBookDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppBooksPageRoutingModule {}
