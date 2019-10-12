import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section-header',
  template: `
    <header>
      <span class="{{icon}} pR-1"></span>
      <span class="title">{{title}}</span>
      <div class="pull-right">
        <ng-content></ng-content>
      </div>
    </header>
  `,
  styleUrls: ['section-header.component.scss']
})
export class SectionHeaderComponent {

  @Input() icon: string;
  @Input() title: string;
}
