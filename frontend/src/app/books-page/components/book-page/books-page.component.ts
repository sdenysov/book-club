import {Component} from '@angular/core';
import {BooksService} from '@@books-page/services/books.service';

@Component({
  selector: 'app-books-page-component',
  templateUrl: './books-page.component.html',
})
export class AppBooksPageComponent {

  constructor(private booksService: BooksService) {}
}
