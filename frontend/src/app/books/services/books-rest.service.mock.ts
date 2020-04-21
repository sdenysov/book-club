import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {BooksRestService} from 'src/app/books/services/books-rest.service';
import {delay} from 'rxjs/internal/operators';
import {booksListMock} from '@@shared/mocks/books-list.mock';
import {SuggestionsMock} from '@@shared/mocks/books-suggestion.mock';
import {profileBooksMock} from '@@shared/mocks/user-books-list.mock';
import {IBook} from '@@books/models/book';

@Injectable({providedIn: 'root'})
export class BooksRestServiceMock implements BooksRestService {

  get$(): Observable<IBook[]> {
    return of(booksListMock);
  }

  suggest$(query: string): Observable<any> {
    switch (query) {
      case 'a':
        return of(SuggestionsMock.suggestion1).pipe(delay(1000));
      case 'ab':
        return of(SuggestionsMock.suggestion2).pipe(delay(2000));
      case 'abc':
        return of(SuggestionsMock.suggestion3).pipe(delay(3000));
      default:
        return of([]);
    }
  }

  addBook$(book: IBook): Observable<HttpResponse<any>> {
    return of({} as HttpResponse<any>);
  }

  getByUserId$(userId: string): Observable<IBook[]> {
    return of(profileBooksMock[userId] || []).pipe(delay(2000));
  }

  getBookById$(bookId: string): Observable<IBook> {
    return of(booksListMock.find(book => book.id === bookId)).pipe(delay(2000));
  }

  editBook$(book: IBook) {
    return of({} as HttpResponse<any>);
  }

  getByUserName$(username: string): Observable<IBook[]> {
    return undefined;
  }
}
