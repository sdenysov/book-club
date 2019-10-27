import {IErrorPayload} from '@@errors/models/i-error.payload';
import {ExceptionData} from '@@errors/models/exception-data.model';
import {HttpErrorData} from '@@errors/models/http-error-data.model';
import {CollectionUtils} from '@@share/utils/collection.utils';

export class ErrorUtils {

  static getHttpErrorMessageCode(httpError: HttpErrorData | null): string | null {
    if (!httpError) {
      return null;
    }
    const errorPayload: IErrorPayload = httpError.response.error;
    return CollectionUtils.getFirstItem(errorPayload.errors);
  }

  static getExceptionErrorCode(exception: ExceptionData | null): string | null {
    return exception ? exception.message : null;
  }
}
