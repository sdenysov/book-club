import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IBook} from '@@books/models/book';

@Component({
  templateUrl: 'find-books-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FindBooksPageComponent {

  trackByBooks(index: number, book: IBook) {
    return book.id;
  }
}
