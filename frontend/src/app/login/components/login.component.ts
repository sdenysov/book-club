import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})

export class AppLogInComponent implements OnInit {

  logInForm: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.logInForm = this.builder.group({
      username: null,
      password: null
    });
  }

  login() {
    console.log('login function');
  }
}
