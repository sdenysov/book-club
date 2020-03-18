import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IBook} from '@@books/models/book';

@Component({
  selector: 'app-my-book-component',
  templateUrl: './my-book.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppMyBookComponent {

  @Input() book: IBook;
}
