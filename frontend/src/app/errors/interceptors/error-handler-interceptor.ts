import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import {ErrorsConverter} from '@@app/errors/converters/errors-converter';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: Error | HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          return throwError(ErrorsConverter.toHttpErrorData(req, error));
        } else {
          return throwError(error);
        }
      })
    );
  }
}
