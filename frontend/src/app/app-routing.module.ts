import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppMainPageComponent} from '@@main/components/main-page/main-page.component';
import {UserGuard} from '@@user/guards/user.guard';
import {AppLogInComponent} from '@@app/login/components/login.component';
import {AppRegisterComponent} from '@@app/register/components/register.component';

const routes: Routes = [
  {path: '', component: AppMainPageComponent},
  {path: 'books', loadChildren: './books/books.module#AppBooksModule'},
  {path: 'login', component: AppLogInComponent},
  {path: 'register', component: AppRegisterComponent},
  {path: ':login', loadChildren: './profile/profile.module#AppProfileModule', canLoad: [UserGuard]},
  {path: '**',  redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
