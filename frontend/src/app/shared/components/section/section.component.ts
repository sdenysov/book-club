import {Component} from '@angular/core';

@Component({
  selector: 'app-section',
  template: `
    <div class="panel panel-default">
      <ng-content select="app-section-header"></ng-content>
      <ng-content select="app-section-main"></ng-content>
    </div>
  `,
})
export class SectionComponent {}
