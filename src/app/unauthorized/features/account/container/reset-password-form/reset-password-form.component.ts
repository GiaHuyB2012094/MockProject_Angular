import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateService } from 'src/app/core/services/validate.service';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent {
  constructor(private validator: ValidateService) {
  }

  formGroup = new FormGroup({
    oldPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40),
    ]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40),
    ]),
    confirmPassword: new FormControl('', 
      Validators.compose([Validators.required])
    ),
  },
  this.validator.passwordMatch('newPassword', 'confirmPassword')
);
  get f(): { [key: string]: AbstractControl } {
    return this.formGroup.controls;
  }

  resetHandle() {
    console.log(this.formGroup.value);
  }
}
