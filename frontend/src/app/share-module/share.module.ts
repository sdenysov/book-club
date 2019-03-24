import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

/**
 * All the dumb components and pipes should be implemented here
 * These components don’t import and inject services from core or other features in their constructors.
 * They should receive all data though attributes in the template of the component using them.
 * It doesn’t have any dependency to the rest of our application.
 */

const SHARE_DECLARATIONS = [

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: SHARE_DECLARATIONS,
  exports: SHARE_DECLARATIONS
})
export class ShareModule {}
