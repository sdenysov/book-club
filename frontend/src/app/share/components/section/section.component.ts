import {Component} from '@angular/core';

@Component({
  selector: 'app-section',
  template: `
    <section>
      <ng-content select="app-section-header"></ng-content>
      <ng-content select="app-section-main"></ng-content>
    </section>
  `
})
export class SectionComponent {}
