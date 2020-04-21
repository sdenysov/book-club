import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IBook} from '@@books/models/book';

@Component({
  selector: 'app-find-book-component',
  templateUrl: 'book-finder.component.html',
  styleUrls: ['book-finder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BookFinderComponent {
  @Input() book: IBook;
}
