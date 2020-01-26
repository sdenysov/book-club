import {MainPageComponent} from '@@app/main-page/components/main-page/main-page.component';
import {AppMainPageModule} from '@@app/main-page/main-page.module';
import {SearchBookPageComponent} from '@@app/search-page/pages/search-book/search-book-page.component';
import {AppSearchPageModule} from '@@app/search-page/search-page.module';
import {AuthGuard} from '@@auth/guards/auth.guard';
import {LogInPageComponent} from '@@auth/pages/login/log-in-page.component';
import {RegisterPageComponent} from '@@auth/pages/register/register-page.component';
import {RoutingUtils} from '@@router/utils/routing-utils';
import {PageNotFoundComponent} from '@@share/components/page-not-found/page-not-found.component';
import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {ProfilePageComponent} from '@@app/profile/pages/profile/profile-page.component';
import {EditProfilePageComponent} from '@@app/profile/pages/edit/edit-profile-page.component';
import {ProfileSettingsPageComponent} from '@@app/profile/pages/settings/profile-settings-page.component';
import {UserBooksPageComponent} from '@@app/user-books/pages/user-books/user-books-page.component';
import {NewBookPageComponent} from '@@app/user-books/pages/new/new-book-page.component';
import {BookDetailsPageComponent} from '@@app/user-books/pages/details/book-details-page.component';
import {EditBookPageComponent} from '@@app/user-books/pages/edit/edit-book-page.component';
import {AppProfileModule} from '@@app/profile/profile.module';
import {AppUserBooksModule} from '@@app/user-books/user-books.module';

const userRoutes: Routes = [
  {path: '', component: ProfilePageComponent},
  {path: 'edit', component: EditProfilePageComponent},
  {path: 'settings', component: ProfileSettingsPageComponent},
  {path: 'books', component: UserBooksPageComponent},
  {path: 'books/new', component: NewBookPageComponent},
  {path: 'books/:id', component: BookDetailsPageComponent},
  {path: 'books/:id/edit', component: EditBookPageComponent}
];

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LogInPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'search-book', component: SearchBookPageComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: ':username', children: userRoutes}
];

routes.map((route: Route) => {
  return RoutingUtils.addCanActivateGuardToTheFirstPosition(route, AuthGuard);
});

userRoutes.map((route: Route) => {
  return RoutingUtils.addCanActivateGuardToTheFirstPosition(route, AuthGuard);
});

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
