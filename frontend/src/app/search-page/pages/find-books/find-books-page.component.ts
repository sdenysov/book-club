import {IBook} from '@@share/models/book';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  templateUrl: 'find-books-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FindBooksPageComponent {

  trackByBooks(index: number, book: IBook) {
    return book.id;
  }
}
