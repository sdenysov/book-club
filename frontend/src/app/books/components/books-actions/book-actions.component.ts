import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-book-actions',
  templateUrl: 'book-actions.component.html',
  styleUrls: ['book-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookActionsComponent {

  dropdownItems = [
    {
      value: 'delete',
      label: 'delete',
      iconName: 'remove-circle'
    },
    {
      value: 'download',
      label: 'download',
      iconName: 'download'
    },
    {
      value: 'edit',
      label: 'edit',
      iconName: 'pencil'
    }
  ];

  onActionSelect(actionValue: string) {
  }
}
