import {HttpErrorResponse} from '@angular/common/http';
import {FormGroup} from '@angular/forms';

export class FormUtils {

  static parseErrorFromResponseToForm(errorResponse: HttpErrorResponse, form: FormGroup) {
    // TODO test it
    const responseBody = errorResponse.error;
    if (typeof responseBody === 'string') {
      form.setErrors({'$async': responseBody});
    }
    if (typeof responseBody === 'object') {
      Object.keys(responseBody).forEach(fieldKey => {
        if (responseBody[fieldKey]) {
          const {type, params} = responseBody[fieldKey];
          form.get(fieldKey).setErrors({[type]: params});
        }
      });
    }
  }
}
