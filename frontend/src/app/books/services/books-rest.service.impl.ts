import {Inject, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BooksRestService} from 'src/app/books/services/books-rest.service';
import {IBook} from '@@books/models/book';

@Injectable({providedIn: 'root'})
export class BooksRestServiceImpl implements BooksRestService {

  private baseUrl = `${this.api}/books`;

  constructor(@Inject('api') private api: string, private http: HttpClient) {}

  get$(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.baseUrl);
  }

  suggest$(query: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/?suggest=${query}`);
  }

  addBook$(book: IBook): Observable<HttpResponse<any>> {
    console.log(JSON.stringify(book));
    return this.http.post<HttpResponse<any>>(this.baseUrl, book, {headers: {'Content-Type': 'application/json'}});
  }

  getByUserId$(userId: string): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.baseUrl}/?user-id=${userId}`);
  }

  getBookById$(bookId: string): Observable<IBook> {
    return this.http.get<IBook>(`${this.baseUrl}/?book-id=${bookId}`);
  }

  editBook$(book: IBook): Observable<HttpResponse<any>> {
    return of(new HttpResponse());
  }
}
