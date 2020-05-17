import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {EnvUtils} from '@@shared/utils/env.utils';
import {IBook} from '@@books/models/book';
import {IBookSearchItem} from '@@navigation/models/book-search-item';

@Injectable({providedIn: 'root', useExisting: EnvUtils.getImpl('BooksRestService')})
export abstract class BooksRestService {

  abstract get$(): Observable<IBook[]>;

  abstract suggest$(query: string): Observable<IBookSearchItem[]>;

  abstract addBook$(book: IBook): Observable<HttpResponse<any>>;

  abstract getByUserId$(userId: string): Observable<IBook[]>;

  abstract getByUserName$(username: string): Observable<IBook[]>;

  abstract getBookById$(bookId: string): Observable<IBook>;

  abstract editBook$(book: IBook): Observable<HttpResponse<any>>;

  abstract search$(query: string): Observable<IBook[]>;
}
