import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-icon',
  template: '<fa-icon [icon]="name"></fa-icon>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {

  @Input() name: string;
}
