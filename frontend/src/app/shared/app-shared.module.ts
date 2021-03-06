import {BigLoadSpinnerComponent} from '@@shared/components/big-load-spinner/big-load-spinner.component';
import {PageNotFoundComponent} from '@@shared/components/page-not-found/page-not-found.component';
import {SectionHeaderComponent} from '@@shared/components/section/section-header.component';
import {SectionMainComponent} from '@@shared/components/section/section-main.component';
import {SectionComponent} from '@@shared/components/section/section.component';
import {ImageDirective} from '@@shared/directives/image.directive';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {AbilityModule} from '@casl/angular';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {AlertModule, RatingModule, TypeaheadModule} from 'ngx-bootstrap';
import {AppIconComponent} from '@@shared/components/icon/icon.component';
import {HttpClient} from '@angular/common/http';
import {httpLoaderFactory} from '@@app/app-translation.module';
import {DropdownComponent} from '@@shared/components/dropdown/dropdown.component';
import {CollapsibleSectionComponent} from '@@shared/components/collapsible-section/collapsible-section.component';
import {ControlErrorComponent} from '@@shared/forms/control-error/control-error.omponent';
import {FileUploadModule} from 'ng2-file-upload';

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
  PageNotFoundComponent,
  AppIconComponent,
  DropdownComponent,
  CollapsibleSectionComponent,
  ControlErrorComponent
];

const SHARE_IMPORTS = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  BsDropdownModule,
  TypeaheadModule,
  AlertModule,
  AbilityModule,
  RatingModule,
  FileUploadModule
];

@NgModule({
  imports: [
    ...SHARE_IMPORTS,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    })
  ],
  declarations: SHARE_DECLARATIONS,
  exports: [
    ...SHARE_IMPORTS,
    ...SHARE_DECLARATIONS,
    TranslateModule
  ]
})
export class AppSharedModule {}
