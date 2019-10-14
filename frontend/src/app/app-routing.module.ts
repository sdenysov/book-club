import {AppAuthModule} from '@@auth/auth.module';
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
