import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IBook} from '@@share/models/book.model';

@Component({
  selector: 'app-book-component',
  templateUrl: 'book.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {

  @Input() book: IBook;
}
