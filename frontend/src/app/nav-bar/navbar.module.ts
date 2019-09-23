import {NgModule} from '@angular/core';
import {AppNavbarComponent} from '@@app/nav-bar/components/navbar/navbar.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ShareModule} from '@@share/share.module';

@NgModule(
  {
    imports: [
      CommonModule,
      RouterModule,
      ShareModule
    ],
    declarations: [
      AppNavbarComponent
    ],
    exports: [
      AppNavbarComponent
    ]
  }
)
export class AppNavbar {}
