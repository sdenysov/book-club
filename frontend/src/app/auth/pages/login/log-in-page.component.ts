import {Credentials} from '@@auth/models/credentials';
import {AuthService} from '@@auth/services/auth.service';
import {LoginFormService} from '@@auth/services/login-form.service';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';

@Component({
  templateUrl: 'log-in-page.component.html'
})
export class LogInPageComponent {

  loginForm: FormGroup;
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;

  constructor(private authService: AuthService,
              private loginFormService: LoginFormService,
              private authReduxFacade: AuthReduxFacade) {
    this.loginForm = loginFormService.form;
    this.usernameCtrl = loginFormService.usernameCtrl;
    this.passwordCtrl = loginFormService.passwordCtrl;
  }

  login() {
    this.loginFormService.submitted = true;
    this.loginForm.markAsPristine();
    if (this.loginForm.invalid) {
      return;
    }
    if (!this.loginForm.pending) {
      const credentials: Credentials = this.loginForm.value;
      this.authReduxFacade.login(credentials);
    }
  }

  hasErrorToShow(ctrl: AbstractControl) {
    return ctrl.invalid && ctrl.pristine && this.loginFormService.submitted;
  }
}


