import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `<span class="icon glyphicon glyphicon-{{name}}"></span>`,
  styles: ['.icon {vertical-align: text-top;}']
})

export class AppIconComponent {
  @Input() name: string;
}
