import {MainPageComponent} from '@@app/main-page/components/main-page/main-page.component';
import {AppMainPageModule} from '@@app/main-page/main-page.module';
import {AppSearchPageModule} from '@@app/search-page/search-page.module';
import {LogInPageComponent} from '@@auth/pages/login/log-in-page.component';
import {RegisterPageComponent} from '@@auth/pages/register/register-page.component';
import {PageNotFoundComponent} from '@@share/components/page-not-found/page-not-found.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfilePageComponent} from '@@app/profile/pages/profile/profile-page.component';
import {EditProfilePageComponent} from '@@app/profile/pages/edit/edit-profile-page.component';
import {ProfileSettingsPageComponent} from '@@app/profile/pages/settings/profile-settings-page.component';
import {UserBooksPageComponent} from '@@app/user-books/pages/user-books/user-books-page.component';
import {NewBookPageComponent} from '@@app/user-books/pages/new/new-book-page.component';
import {BookDetailsPageComponent} from '@@app/user-books/pages/details/book-details-page.component';
import {EditBookPageComponent} from '@@app/user-books/pages/edit/edit-book-page.component';
import {AppProfileModule} from '@@app/profile/profile.module';
import {AppUserBooksModule} from '@@app/user-books/user-books.module';
import {AuthGuard} from '@@auth/guards/auth.guard';
import {FindBooksPageComponent} from '@@app/search-page/pages/find-books/find-books-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LogInPageComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterPageComponent, canActivate: [AuthGuard]},
  {path: 'find-books', component: FindBooksPageComponent, canActivate: [AuthGuard]},
  {path: '404', component: PageNotFoundComponent, canActivate: [AuthGuard]},
  {
    path: ':username', children: [
      {path: '', component: ProfilePageComponent, canActivate: [AuthGuard]},
      {path: 'edit', component: EditProfilePageComponent, canActivate: [AuthGuard]},
      {path: 'settings', component: ProfileSettingsPageComponent, canActivate: [AuthGuard]},
      {path: 'books', component: UserBooksPageComponent, canActivate: [AuthGuard]},
      {path: 'books/new', component: NewBookPageComponent, canActivate: [AuthGuard]},
      {path: 'books/:id', component: BookDetailsPageComponent, canActivate: [AuthGuard]},
      {path: 'books/:id/edit', component: EditBookPageComponent, canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [
    AppMainPageModule,
    AppSearchPageModule,
    AppProfileModule,
    AppUserBooksModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
