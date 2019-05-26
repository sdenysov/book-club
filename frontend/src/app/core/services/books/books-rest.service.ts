import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {environment} from '@@env/environment';
import {BooksRestServiceMock} from '@@core/services/books/books-rest.service.mock';
import {BooksRestServiceImpl} from '@@core/services/books/books-rest.service.impl';
import {BookModel} from '@@share/models/book.model';

@Injectable({
  providedIn: 'root', useExisting: environment.mock ? BooksRestServiceMock : BooksRestServiceImpl
})
export abstract class BooksRestService {

  abstract get$(): Observable<BookModel[]>;

  abstract suggest$(query: string): Observable<any>;

  abstract addBook$(book: BookModel): Observable<HttpResponse<any>>;

  abstract getByUserId$(userId: number): Observable<BookModel[]>;
}
