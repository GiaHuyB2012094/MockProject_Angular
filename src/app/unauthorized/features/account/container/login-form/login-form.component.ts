import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TOAST_STATE } from 'src/app/core/constants/toast.constant';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from '../../../../../core/services/api/user.service';
import { Perform } from 'src/app/core/models/classes/perform';
import { IUser } from 'src/app/core/models/interfaces/IUser.interface';
import { LoginDTO } from 'src/app/core/models/dto/auth.dto';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  data = new Perform<LoginDTO>();

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

  constructor(private toast: ToastService, private userService: UserService) {}

  loginHandle() {
    const credentials = {
      email: this.formGroup.value.email || '',
      password: this.formGroup.value.password || '',
    };

    if (this.formGroup.status === 'VALID') {
      this.data.load(this.userService.login(credentials));

      console.log(credentials);
      console.log(this.data);

      if (this.data.data) {
        this.toast.showToast(
          TOAST_STATE.success,
          'You have successfully login!'
        );
        this.dismissError();
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
        'Something went wrong, could not login!'
      );
      this.dismissError();
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formGroup.controls;
  }

  private dismissError(): void {
    setTimeout(() => {
      this.toast.dismissToast();
    }, 2000);
  }
}
