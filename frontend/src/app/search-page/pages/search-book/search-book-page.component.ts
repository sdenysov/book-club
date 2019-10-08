import {SearchBooksService} from '@@app/search-page/services/search-books.service';
import {BookModel} from '@@share/models/book.model';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  templateUrl: 'search-book-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBookPageComponent implements OnInit {

  constructor(private searchBooksService: SearchBooksService) {}

  ngOnInit() {
  }

  trackByBooks(index: number, book: BookModel) {
    return book.id;
  }
}
