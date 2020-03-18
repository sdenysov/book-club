import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-section-header',
  template: `
    <h3 class="panel-title">
      <div class="caption">
        <app-icon class="pR-1" name="{{icon}}"></app-icon>
        <span>{{caption | uppercase}}</span>
      </div>
      <div class="pull-right">
        <ng-content></ng-content>
      </div>
    </h3>
  `
})
export class SectionHeaderComponent {
  @HostBinding('class') class = 'panel-heading';
  @Input() icon: string;
  @Input() caption: string;
}
