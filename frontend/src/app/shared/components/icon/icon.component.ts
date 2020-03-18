import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `<span class="glyphicon glyphicon-{{name}}"></span>`
})

export class AppIconComponent {
  @Input() name: string;
}
