import {AuthService} from '@@auth/services/auth.service';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {HttpErrorData} from '@@errors/models/http-error-data.model';
import {User} from '@@share/models/user';
import {FormUtils} from '@@share/utils/form.utils';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UNAUTHORIZED} from 'http-status-codes';
import {EMPTY, Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  templateUrl: 'log-in-page.component.html'
})
export class LogInPageComponent implements OnInit {

  logInForm: FormGroup;

  constructor(private builder: FormBuilder,
              private authService: AuthService,
              private authReduxFacade: AuthReduxFacade,
              private router: Router) {
  }

  ngOnInit() {
    this.logInForm = this.builder.group({
      username: this.builder.control(null, [Validators.required, Validators.minLength(3)]),
      password: this.builder.control(null, [Validators.required, Validators.minLength(6)])
    });
  }

  login() {
    if (this.logInForm.valid && !this.logInForm.pending) {
      const {username, password} = this.logInForm.value;
      this.authService.login$({username, password})
        .pipe(this.handleLoginErrorResponse())
        .subscribe((user: User) => {
          this.authReduxFacade.setLoggedInUser(user);
          // TODO перенести в routerService
          this.router.navigate([this.authService.requestedUrlBeforeRedirectToLoginPage]);
        });
    }
  }

  private handleLoginErrorResponse() {
    return (o: Observable<User>) => o.pipe(catchError((error: Error | HttpErrorData) => {
      if (error instanceof HttpErrorData && error.response.status === UNAUTHORIZED) {
        FormUtils.parseErrorFromResponseToForm(error.response, this.logInForm);
        return EMPTY;
      }
      this.logInForm.reset();
      return throwError(error);
    }));
  }
}


