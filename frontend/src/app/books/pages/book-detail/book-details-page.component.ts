import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IBook} from '../../models/book';

@Component({
  selector: 'app-book-details-page-component',
  templateUrl: 'book-details-page.component.html',
  styleUrls: ['book-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BookDetailsPageComponent {
  @Input() book: IBook;
}
