import {Component, Input} from '@angular/core';

@Component({
  selector: '.panel-heading',
  template: `
   <h3 class="panel-title">
    <div class="caption">
      <app-icon class="pR-1" name="{{icon}}"></app-icon>
      <span>{{caption | uppercase}}</span>
      <div class="pull-right">
        <ng-content></ng-content>
      </div>
    </div>
   </h3>
  `
})
export class SectionHeaderComponent {
  @Input() icon: string;
  @Input() caption: string;
}
