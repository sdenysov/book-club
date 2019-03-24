import {Component} from '@angular/core';
import {BooksDataService} from '@@books-page/services/books-data.service';
import {BookModel} from '@@books-page/models/book.model';

@Component({
  selector: 'app-book-component',
  templateUrl: './book.component.html',
})
export class AppBookComponent {
  private books = [];

  constructor(private booksDataService: BooksDataService) {
    this.booksDataService.get().subscribe((res: BookModel[]) => {
      this.books = res;
    });
  }
}
