import {Observable} from 'rxjs/index';
import {BookModel} from '@@books-page/models/book.model';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {BooksDataServiceMock} from '@@books-page/services/books-data.service.mock';
import {BooksDataServiceImpl} from '@@books-page/services/books-data.service.impl';

@Injectable({
  providedIn: 'root', useExisting: environment.mock ? BooksDataServiceMock : BooksDataServiceImpl
})
export abstract class BooksDataService {

  abstract get(): Observable<BookModel[]>;
  abstract suggest(query: string): Observable<any>;
}
