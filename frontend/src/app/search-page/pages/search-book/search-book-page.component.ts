import {SearchBooksService} from '@@app/search-page/services/search-books.service';
import {Book} from '@@share/models/book';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  templateUrl: 'search-book-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBookPageComponent implements OnInit {

  constructor(private searchBooksService: SearchBooksService) {}

  ngOnInit() {
  }

  trackByBooks(index: number, book: Book) {
    return book.id;
  }
}
