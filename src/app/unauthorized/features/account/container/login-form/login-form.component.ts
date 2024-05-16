import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TOAST_STATE } from 'src/app/core/constants/toast.constant';
import { ToastService } from 'src/app/core/services/toast.service';

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

  constructor(private toast: ToastService) {
  }

  loginHandle() {
    if (this.formGroup.status === 'VALID') {
      console.log('You have successfully login!');
      this.toast.showToast(TOAST_STATE.success, 'You have successfully login!');
      this.dismissError();        

    } else {
      this.toast.showToast(TOAST_STATE.danger, 'Something went wrong, could not login!');
      this.dismissError();  
      console.log('Something went wrong, could not login!');
    }
  }

  private dismissError(): void {    
    setTimeout(() => {      
      this.toast.dismissToast();    
    }, 2000);  
  }
}
