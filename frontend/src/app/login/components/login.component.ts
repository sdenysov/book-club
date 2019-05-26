import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})

export class AppLogInComponent implements OnInit {

  logInForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.logInForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  login() {
    console.log('login function');
  }
}
