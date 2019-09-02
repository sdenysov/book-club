import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppProfileComponent} from '@@app/profile/components/profile/profile.component';
import {AppMyBooksComponent} from '@@app/profile/components/my-books/my-books.component';
import {AppNewBookComponent} from '@@app/profile/components/new-book/new-book.component';
import {AppEditBookComponent} from '@@app/profile/components/edit-book/edit-book.component';

const routes: Routes = [
  {path: '', component: AppProfileComponent},
  {path: 'books', component: AppMyBooksComponent},
  {path: 'books/edit/:id', component: AppEditBookComponent},
  {path: 'books/add', component: AppNewBookComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppUserRoutingModule {}
