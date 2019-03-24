import {Inject, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {BookModel} from '@@books-page/models/book.model';
import {SuggestionsMock} from '@@books-page/mocks/books-suggestion.mock';
import {BooksDataService} from '@@books-page/services/books-data.service';

@Injectable({providedIn: 'root'})
export class BooksDataServiceMock implements BooksDataService {

  private baseUrl = `${this.api}/books`;

  constructor(@Inject('api') private api: string, private http: HttpClient) {
    console.log('BooksDataServiceMock created');
  }

  get(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(this.baseUrl);
  }

  suggest(query: string): Observable<any> {
    console.log('test suggestions query:', query);
    switch (query) {
      case 'a': return of(SuggestionsMock.suggestion1);
      case 'ab': return of(SuggestionsMock.suggestion2);
      case 'abc': return of(SuggestionsMock.suggestion3);
      default: return of([]);
    }
  }
}
