import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html'
})

export class AppRegisterComponent implements OnInit {

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
