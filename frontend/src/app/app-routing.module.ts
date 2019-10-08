import {AppAuthModule} from '@@app/auth/auth.module';
import {LogInPageComponent} from '@@app/auth/pages/login/log-in-page.component';
import {RegisterPageComponent} from '@@app/auth/pages/register/register-page.component';
import {MainPageComponent} from '@@app/main-page/components/main-page/main-page.component';
import {AppMainPageModule} from '@@app/main-page/main-page.module';
import {SearchBookPageComponent} from '@@app/search-page/pages/search-book/search-book-page.component';
import {AppSearchPageModule} from '@@app/search-page/search-page.module';
import {PageNotFoundComponent} from '@@share/components/page-not-found/page-not-found.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'search-book', component: SearchBookPageComponent},
  {path: 'login', component: LogInPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: ':username', loadChildren: './user/user.module#AppUserModule', data: {preloading: true}}
];

@NgModule({
  imports: [
    AppAuthModule,
    AppMainPageModule,
    AppSearchPageModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
