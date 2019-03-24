import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {BookModel} from '@@books-page/models/book.model';
import {BooksDataService} from '@@books-page/services/books-data.service';

@Injectable({providedIn: 'root'})
export class BooksDataServiceImpl implements BooksDataService {

  private baseUrl = `${this.api}/books`;

  constructor(@Inject('api') private api: string, private http: HttpClient) {
    console.log('BooksDataServiceImpl created');
  }

  get(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(this.baseUrl);
  }

  suggest(query: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/?suggest=${query}`);
  }
}
