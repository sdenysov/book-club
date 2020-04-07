import {Component} from '@angular/core';

@Component({
  selector: 'app-section',
  template: `
    <div class="panel panel-default">
      <ng-content></ng-content>
    </div>
  `,
})
export class SectionComponent {}
