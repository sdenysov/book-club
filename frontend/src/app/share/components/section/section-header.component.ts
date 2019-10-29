import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section-header',
  template: `
    <header>
      <app-icon [name]="icon" class="pR-1"></app-icon>
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
