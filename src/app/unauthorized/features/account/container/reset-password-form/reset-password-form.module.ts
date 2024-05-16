import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordFormComponent } from './reset-password-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ResetPasswordFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [ResetPasswordFormComponent]
})
export class ResetPasswordFormModule { }
