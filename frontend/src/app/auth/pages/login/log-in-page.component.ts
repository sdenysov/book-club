import {AuthService} from '@@auth/services/auth.service';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {HttpErrorData} from '@@errors/models/http-error-data.model';
import {RouterService} from '@@router/services/router.service';
import {FormErrors} from '@@share/models/form-errors';
import {User} from '@@share/models/user';
import {ValidationError} from '@@share/models/validation-error';
import {FormUtils} from '@@share/utils/form.utils';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UNAUTHORIZED} from 'http-status-codes';
import {EMPTY, Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  templateUrl: 'log-in-page.component.html'
})
export class LogInPageComponent implements OnInit {

  logInForm: FormGroup;
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;

  constructor(private builder: FormBuilder,
              private authService: AuthService,
              private authReduxFacade: AuthReduxFacade,
              private routerService: RouterService) {
  }

  ngOnInit() {
    this.usernameCtrl = this.builder.control(null, [Validators.required, Validators.minLength(3)]);
    this.passwordCtrl = this.builder.control(null, [Validators.required, Validators.minLength(6)]);
    this.logInForm = this.builder.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl
    });
  }

  login() {
    if (this.logInForm.invalid) {
      this.logInForm.markAllAsTouched();
      return;
    }
    if (!this.logInForm.pending) {
      const {username, password} = this.logInForm.value;
      this.authService.login$({username, password})
        .pipe(this.handleLoginErrorResponse())
        .subscribe((user: User) => {
          this.authReduxFacade.loginSuccess(user);
          if (this.authService.redirectUrl) {
            this.routerService.goTo(this.authService.redirectUrl);
          } else {
            this.routerService.goToMainPage();
          }
        });
    }
  }

  private handleLoginErrorResponse() {
    return (o: Observable<User>) => o.pipe(
      catchError((error: Error | HttpErrorData) => {
        if (error instanceof HttpErrorData && error.response.status === UNAUTHORIZED) {
          const validationError: ValidationError = {type: 'bad_credentials'};
          const formErrors: FormErrors = {$form: validationError, ...error.response.error};
          FormUtils.setErrorsToForm(formErrors, this.logInForm);
          return EMPTY;
        }
        this.logInForm.reset();
        return throwError(error);
      })
    );
  }
}


