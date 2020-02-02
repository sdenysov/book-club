import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IBook} from '@@share/models/book';

@Component({
  selector: 'app-user-book-component',
  templateUrl: 'user-book.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserBookComponent {

  @Input() book: IBook;
}
