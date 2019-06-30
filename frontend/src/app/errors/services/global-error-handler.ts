import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {HttpErrorData} from '@@errors/models/http-error-data.model';
import {ErrorsConverter} from '@@errors/converters/errors-converter';
import {ExceptionData} from '@@app/errors/models/exception-data.model';
import {HttpErrorHandlerService} from '@@errors/services/http-error-handler.service';

@Injectable({providedIn: 'root'})
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) {}

  get httpErrorService() {
    return this.injector.get(HttpErrorHandlerService);
  }

  get errorReduxService() {
    // return this.injector.get(ErrorReduxService);
    return {
      addException: (exception) => {
        console.log('addException');
      }
    };
  }

  get screenLockReduxService() {
    // return this.injector.get(ScreenLockReduxService);
    return {
      unlockScreen: () => {
        console.log('unlock screen');
      }
    };
  }

  handleError(error: Error | HttpErrorData) {
    if (error instanceof HttpErrorData) {
      this.httpErrorService.handleErrorResponse(error);
      console.error(`AJAX call error: ${error.response.message}\n`, error.response);
    } else {
      const exceptionData = ErrorsConverter.toExceptionData(error);
      this.errorReduxService.addException(exceptionData);
      console.error('Client error:', error);
    }
    this.screenLockReduxService.unlockScreen();
  }
}
