import {HttpErrorData} from '@@errors/models/http-error-data.model';
import {IFormErrors} from '@@share/models/i-form-errors';
import {IValidationError} from '@@share/models/i-validation-error';
import {FormUtils} from '@@share/utils/form.utils';
import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UNAUTHORIZED} from 'http-status-codes';
import {EMPTY, throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class LoginFormService {

  form: FormGroup;
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  submitted: boolean;

  constructor(private builder: FormBuilder) {
    this.usernameCtrl = this.builder.control(null, [Validators.required, Validators.minLength(3)]);
    this.passwordCtrl = this.builder.control(null, [Validators.required, Validators.minLength(6)]);
    this.form = this.builder.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl
    });
  }

  handleLoginFailedResponse(error: Error | HttpErrorData) {
    if (error instanceof HttpErrorData && error.response.status === UNAUTHORIZED) {
      const validationError: IValidationError = {type: 'bad_credentials'};
      const formErrors: IFormErrors = {$form: validationError, ...error.response.error};
      FormUtils.setErrorsToForm(formErrors, this.form);
      return EMPTY;
    }
    this.form.reset();
    return throwError(error);
  }
}

