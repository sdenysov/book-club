import {Component} from '@angular/core';

@Component({
  selector: 'app-section-main',
  template: `
    <div class="panel-body">
      <ng-content></ng-content>
    </div>
  `
})
export class SectionMainComponent {}
