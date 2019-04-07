import {Injectable} from '@angular/core';
import {BooksDataService} from '@@books-page/services/books-data.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private booksDataService: BooksDataService) {}
}
