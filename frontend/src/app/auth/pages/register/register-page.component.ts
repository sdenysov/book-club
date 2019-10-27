import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  templateUrl: 'register-page.component.html'
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.builder.group({
      name: null,
      surname: null,
      username: null,
      password: null
    });
  }

  register() {
    console.log('register function');
  }
}
