import {BigLoadSpinnerComponent} from '@@share/components/big-load-spinner/big-load-spinner.component';
import {PageNotFoundComponent} from '@@share/components/page-not-found/page-not-found.component';
import {SectionHeaderComponent} from '@@share/components/section/section-header.component';
import {SectionMainComponent} from '@@share/components/section/section-main.component';
import {SectionComponent} from '@@share/components/section/section.component';
import {ImageDirective} from '@@share/directives/image.directive';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {AbilityModule} from '@casl/angular';

/**
 * All the dumb components and pipes should be implemented here
 * These components don’t import and inject services from core or other features in their constructors.
 * They should receive all data though attributes in the template of the component using them.
 * It doesn’t have any dependency to the rest of our application.
 */

const SHARE_DECLARATIONS = [
  SectionComponent,
  SectionHeaderComponent,
  SectionMainComponent,
  ImageDirective,
  BigLoadSpinnerComponent,
  PageNotFoundComponent
];

const SHARE_IMPORTS = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  BsDropdownModule,
  AbilityModule
];

@NgModule({
  imports: SHARE_IMPORTS,
  declarations: SHARE_DECLARATIONS,
  exports: [...SHARE_IMPORTS, ...SHARE_DECLARATIONS]
})
export class AppShareModule {}
