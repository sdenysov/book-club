import {HttpErrorData} from '@@errors/models/http-error-data.model';
import {FormErrors} from '@@share/models/form-errors';
import {ValidationError} from '@@share/models/validation-error';
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
    this.passwordCtrl = this.builder.control(null, [Validators.required, Validators.minLength(5)]);
    this.form = this.builder.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl
    });
  }

  reset() {
    this.submitted = false;
    this.form.reset();
  }

  handleLoginFailedResponse(error: Error | HttpErrorData) {
    if (error instanceof HttpErrorData && error.response.status === UNAUTHORIZED) {
      const validationError: ValidationError = {type: 'bad_credentials'};
      const formErrors: FormErrors = {$form: validationError, ...error.response.error};
      FormUtils.setErrorsToForm(formErrors, this.form);
      return EMPTY;
    }
    this.form.reset();
    return throwError(error);
  }
}

