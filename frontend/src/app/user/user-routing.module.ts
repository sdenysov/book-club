import {EditProfilePageComponent} from '@@app/profile/pages/edit/edit-profile-page.component';
import {ProfilePageComponent} from '@@app/profile/pages/profile/profile-page.component';
import {ProfileSettingsPageComponent} from '@@app/profile/pages/settings/profile-settings-page.component';
import {AppProfileModule} from '@@app/profile/profile.module';
import {BookDetailsPageComponent} from '@@app/user-books/pages/details/book-details-page.component';
import {EditBookPageComponent} from '@@app/user-books/pages/edit/edit-book-page.component';
import {NewBookPageComponent} from '@@app/user-books/pages/new/new-book-page.component';
import {UserBooksPageComponent} from '@@app/user-books/pages/user-books/user-books-page.component';
import {AppUserBooksModule} from '@@app/user-books/user-books.module';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: ProfilePageComponent},
  {path: 'edit', component: EditProfilePageComponent},
  {path: 'settings', component: ProfileSettingsPageComponent},
  {path: 'books', component: UserBooksPageComponent},
  {path: 'books/new', component: NewBookPageComponent},
  {path: 'books/:id', component: BookDetailsPageComponent},
  {path: 'books/:id/edit', component: EditBookPageComponent}
];

@NgModule({
  imports: [
    AppProfileModule,
    AppUserBooksModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {}
