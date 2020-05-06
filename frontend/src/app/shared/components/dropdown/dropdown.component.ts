import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {IDropdownItem} from '@@shared/models/dropdown-item';
import {BsDropdownDirective} from 'ngx-bootstrap';

@Component({
  selector: 'app-dropdown',
  templateUrl: 'dropdown.component.html',
  styleUrls: ['dropdown.component.scss'],
})
export class DropdownComponent {

  @ViewChild(BsDropdownDirective, {static: false}) bsDropdown: BsDropdownDirective;

  @Input() items: IDropdownItem[];
  @Input() align: 'left' | 'right' = 'left';
  @Output() select: EventEmitter<string> = new EventEmitter();

  onSelect(item: IDropdownItem) {
    this.select.emit(item.value);
  }
}
