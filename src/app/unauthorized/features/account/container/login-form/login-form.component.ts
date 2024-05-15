import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  formGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(250),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40),
    ]),
  });

  constructor() {
    this.formGroup.valueChanges.subscribe((val) => console.log(this.formGroup));
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formGroup.controls;
  }

  loginHandle() {
    console.log(this.formGroup);
  }
}
