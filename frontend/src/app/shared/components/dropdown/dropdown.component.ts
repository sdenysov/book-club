import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output, SimpleChange, SimpleChanges,
  ViewChild
} from '@angular/core';
import {IDropdownItem} from '@@shared/models/dropdown-item';
import {BsDropdownDirective} from 'ngx-bootstrap';
import {CollectionUtils} from '@@shared/utils/collection.utils';

@Component({
  selector: 'app-dropdown',
  templateUrl: 'dropdown.component.html',
  styleUrls: ['dropdown.component.scss'],
})
export class DropdownComponent {

  public items: IDropdownItem[];
  @ViewChild(BsDropdownDirective, {static: true}) bsDropdown: BsDropdownDirective;

  @Input() typeaheadMode: boolean;
  @Input('items') set onItemsChange(items: IDropdownItem[]) {
    this.items = items;
    if (this.typeaheadMode) {
      this.toggleForTypeahead();
    }
  }
  @Input() align: 'left' | 'right' = 'left';
  @Output() select: EventEmitter<string> = new EventEmitter();

  onSelect(item: IDropdownItem) {
    this.select.emit(item.value);
  }

  toggle() {
    if (!this.typeaheadMode) {
      this.bsDropdown.toggle(true);
    }
  }

  private toggleForTypeahead() {
    if (CollectionUtils.isNotEmpty(this.items)) {
      this.bsDropdown.show();
    } else {
      this.bsDropdown.hide();
    }
  }
}
