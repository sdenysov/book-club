import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section-header',
  template: `
    <header>
      <span class="glyphicon glyphicon-{{icon}} pR-1"></span>
      <span>{{title}}</span>
      <div class="pull-right">
        <ng-content></ng-content>
      </div>
    </header>
  `
})
export class SectionHeaderComponent {

  @Input() icon: string;
  @Input() title: string;
}
