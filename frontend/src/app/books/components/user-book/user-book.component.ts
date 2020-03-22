import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IBook} from '@@books/models/book';

@Component({
  selector: 'app-user-book-component',
  templateUrl: 'user-book.component.html',
  styleUrls: ['user-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserBookComponent {
  @Input() book: IBook;
}
