import {TIconSize} from '@@share/models/icon-size';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-icon',
  template: '<fa-icon [icon]="name" [size]="size"></fa-icon>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {

  @Input() name: string;
  @Input() size: TIconSize = 'sm';
}
