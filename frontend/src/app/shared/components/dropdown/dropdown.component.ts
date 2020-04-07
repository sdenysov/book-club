import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IDropdownItem} from '@@shared/models/dropdown-item';

@Component({
  selector: 'app-dropdown',
  templateUrl: 'dropdown.component.html',
  styleUrls: ['dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {

  @Input() items: IDropdownItem[];
  @Input() align: 'left' | 'right' = 'left';
  @Output() select: EventEmitter<string> = new EventEmitter();

  onSelect(item: IDropdownItem) {
    this.select.emit(item.value);
  }
}
