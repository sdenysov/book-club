import {LogInPageComponent} from '@@auth/pages/login/log-in-page.component';
import {RegisterPageComponent} from '@@auth/pages/register/register-page.component';
import {LoginPageGuard} from '@@auth/guards/login-page.guard';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LogInPageComponent, canLoad: [LoginPageGuard]},
  {path: 'register', component: RegisterPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppAuthRoutingModule {}
