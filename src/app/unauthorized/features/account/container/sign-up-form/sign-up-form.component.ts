import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TOAST_STATE } from 'src/app/core/constants/toast.constant';
import { Perform } from 'src/app/core/models/classes/perform';
import { SignupDTO } from 'src/app/core/models/dto/user.dto';
import { ToastService } from 'src/app/core/services/toast.service';
import { ValidateService } from 'src/app/core/services/validate.service';
import { UserService } from '../../../../../core/services/api/user.service';
import { IUser } from 'src/app/core/models/interfaces/IUser.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  data = new Perform<SignupDTO>();
  data1 = new Perform<IUser[]>();
  router: Router = inject(Router);

  constructor(
    private validator: ValidateService,
    private toast: ToastService,
    private userService: UserService
  ) {}

  formGroup = new FormGroup(
    {
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
      confirmPassword: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
    },
    this.validator.passwordMatch('password', 'confirmPassword')
  );
  get f(): { [key: string]: AbstractControl } {
    return this.formGroup.controls;
  }

  signupHandle() {
    const credentials = {
      email: this.formGroup.value.email || '',
      username: this.formGroup.value.username || '',
      password: this.formGroup.value.password || '',
    };

    if (this.formGroup.status === 'VALID') {
      console.log(credentials);
      console.log(this.formGroup.status);
      this.data.load(this.userService.signup(credentials));
      this.data1.load(this.userService.getUsers());
      console.log(this.data);

      if (this.data.data) {
        this.toast.showToast(
          TOAST_STATE.success,
          'You have successfully signup!'
        );
        this.dismissError();
        this.formGroup.reset();
        this.router.navigateByUrl('/login');
      } else {
        this.toast.showToast(
          TOAST_STATE.danger,
          'Incorrect account information and password'
        );
        this.dismissError();
      }
    } else {
      this.toast.showToast(
        TOAST_STATE.danger,
        'Something went wrong, could not signup!'
      );
      this.dismissError();
    }
  }

  private dismissError(): void {
    setTimeout(() => {
      this.toast.dismissToast();
    }, 2000);
  }
}
