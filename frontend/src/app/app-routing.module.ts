import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppMainPageComponent} from '@@main-page/components/main-page/main-page.component';

const routes: Routes = [
  {path: '', component: AppMainPageComponent},
  {path: 'books', loadChildren: './books-page/books-page.module#AppBooksPageModule'},
  {path: '**',  redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
