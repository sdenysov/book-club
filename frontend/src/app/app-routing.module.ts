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

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LogInPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'search-book', component: SearchBookPageComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: ':username', loadChildren: './user/user.module#AppUserModule', data: {preloading: true}}
].map((route: Route) => {
  return RoutingUtils.addCanActivateGuardToTheFirstPosition(route, AuthGuard);
});

@NgModule({
  imports: [
    AppMainPageModule,
    AppSearchPageModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
