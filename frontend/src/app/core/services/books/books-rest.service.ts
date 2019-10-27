import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {IBook} from '@@share/models/book.model';
import {EnvUtils} from '@@core/utils/env.utils';

@Injectable({providedIn: 'root', useExisting: EnvUtils.getImpl('BooksRestService')})
export abstract class BooksRestService {

  abstract get$(): Observable<IBook[]>;

  abstract suggest$(query: string): Observable<any>;

  abstract addBook$(book: IBook): Observable<HttpResponse<any>>;

  abstract getByUserId$(userId: string): Observable<IBook[]>;

  abstract getBookById$(bookId: string): Observable<IBook>;

  abstract editBook$(book: IBook): Observable<HttpResponse<any>>;
}
