import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordComponent } from './change-password.component';
import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { EmailFormModule } from '../../container/email-form/email-form.module';
import { ResetPasswordFormModule } from '../../container/reset-password-form/reset-password-form.module';


@NgModule({
  declarations: [
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,
    EmailFormModule,
    ResetPasswordFormModule
  ]
})
export class ChangePasswordModule { }
