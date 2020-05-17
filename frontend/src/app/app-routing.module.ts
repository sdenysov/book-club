import {MainPageComponent} from '@@app/main-page/components/main-page/main-page.component';
import {AppMainPageModule} from '@@app/main-page/main-page.module';
import {AppBooksFinderModule} from '@@app/books-finder/books-finder.module';
import {LogInPageComponent} from '@@auth/pages/login/log-in-page.component';
import {RegisterPageComponent} from '@@auth/pages/register/register-page.component';
import {PageNotFoundComponent} from '@@shared/components/page-not-found/page-not-found.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfilePageComponent} from '@@app/profile/pages/profile/profile-page.component';
import {EditProfilePageComponent} from '@@app/profile/pages/edit/edit-profile-page.component';
import {ProfileSettingsPageComponent} from '@@app/profile/pages/settings/profile-settings-page.component';
import {AppProfileModule} from '@@app/profile/profile.module';
import {AuthGuard} from '@@auth/guards/auth.guard';
import {FindBooksPageComponent} from '@@app/books-finder/pages/find-books/find-books-page.component';
import {UserBooksPageComponent} from '@@user/pages/user-books/user-books-page.component';
import {NewBookPageComponent} from '@@user/pages/new/new-book-page.component';
import {EditBookPageComponent} from '@@user/pages/edit/edit-book-page.component';
import {AppUserModule} from '@@user/user-books.module';
import {BookDetailsPageComponent} from '@@books/pages/book-detail/book-details-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LogInPageComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterPageComponent, canActivate: [AuthGuard]},
  {path: 'find-books', component: FindBooksPageComponent, canActivate: [AuthGuard]},
  {path: 'books/:id', component: BookDetailsPageComponent, canActivate: [AuthGuard]},
  {path: '404', component: PageNotFoundComponent, canActivate: [AuthGuard]},
  {
    path: ':username', children: [
      {path: '', component: ProfilePageComponent, canActivate: [AuthGuard]},
      {path: 'edit', component: EditProfilePageComponent, canActivate: [AuthGuard]},
      {path: 'settings', component: ProfileSettingsPageComponent, canActivate: [AuthGuard]},
      {path: 'books', component: UserBooksPageComponent, canActivate: [AuthGuard]},
      {path: 'books/new', component: NewBookPageComponent, canActivate: [AuthGuard]},
      {path: 'books/:id/edit', component: EditBookPageComponent, canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [
    AppMainPageModule,
    AppBooksFinderModule,
    AppProfileModule,
    AppUserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
