import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BookModel} from '@@share/models/book.model';
import {BooksRestService} from '@@core/services/books/books-rest.service';

@Injectable({providedIn: 'root'})
export class BooksRestServiceImpl implements BooksRestService {

  private baseUrl = `${this.api}/books`;

  constructor(@Inject('api') private api: string, private http: HttpClient) {}

  get$(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(this.baseUrl);
  }

  suggest$(query: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/?suggest=${query}`);
  }

  addBook$(book: BookModel): Observable<HttpResponse<any>> {
    console.log(JSON.stringify(book));
    return this.http.post<HttpResponse<any>>(this.baseUrl, book, {headers: {'Content-Type': 'application/json'}});
  }

  getByUserId$(userId: number): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(`${this.baseUrl}/?user-id=${userId}`);
  }
}
