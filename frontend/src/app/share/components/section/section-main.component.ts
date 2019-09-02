import {Component} from '@angular/core';

@Component({
  selector: 'app-section-main',
  template: `
    <main>
      <ng-content></ng-content>
    </main>
  `
})
export class SectionMainComponent {}
