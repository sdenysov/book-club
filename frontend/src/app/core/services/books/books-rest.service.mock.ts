import {Inject, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs/index';
import {HttpResponse} from '@angular/common/http';
import {Book} from '@@share/models/book';
import {BooksRestService} from '@@core/services/books/books-rest.service';
import {profileBooksMock} from '@@share/mocks/user-books-list.mock';
import {delay} from 'rxjs/internal/operators';
import {SuggestionsMock} from '@@share/mocks/books-suggestion.mock';
import {booksListMock} from '@@share/mocks/books-list.mock';

@Injectable({providedIn: 'root'})
export class BooksRestServiceMock implements BooksRestService {

  constructor(@Inject('api') private api: string) {}

  get$(): Observable<Book[]> {
    return of(booksListMock);
  }

  suggest$(query: string): Observable<any> {
    switch (query) {
      case 'a':
        return of(SuggestionsMock.suggestion1);
      case 'ab':
        return of(SuggestionsMock.suggestion2);
      case 'abc':
        return of(SuggestionsMock.suggestion3);
      default:
        return of([]);
    }
  }

  addBook$(book: Book): Observable<HttpResponse<any>> {
    return of({} as HttpResponse<any>);
  }

  getByUserId$(userId: string): Observable<Book[]> {
    return of(profileBooksMock[userId] || []).pipe(delay(2000));
  }

  getBookById$(bookId: string): Observable<Book> {
    return of(booksListMock.find(book => book.id === bookId)).pipe(delay(2000));
  }

  editBook$(book: Book) {
    return of({} as HttpResponse<any>);
  }
}
