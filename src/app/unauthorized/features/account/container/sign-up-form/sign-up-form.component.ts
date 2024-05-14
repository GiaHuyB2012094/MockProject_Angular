import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  formGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(250),
    ]),
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
    confirmPassword: new FormControl('', [
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
    console.log('login', this.f['email']);
  }
}
