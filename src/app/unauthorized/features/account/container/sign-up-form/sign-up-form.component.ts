import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidateService } from 'src/app/core/services/validate.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})

export class SignUpFormComponent {

  constructor(private validator: ValidateService) {
    // this.formGroup.valueChanges.subscribe((val) => console.log(this.formGroup));
  }

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
    confirmPassword: new FormControl('', 
      Validators.compose([Validators.required])
    ),
  },
  this.validator.passwordMatch('password', 'confirmPassword')
);
  get f(): { [key: string]: AbstractControl } {
    return this.formGroup.controls;
  }

  signupHandle() {
    console.log(this.formGroup.value);
    console.log('oaooa');
  }
}
