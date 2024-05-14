import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpFormComponent } from './sign-up-form.component';

@NgModule({
  declarations: [SignUpFormComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [SignUpFormComponent],
})
export class SignUpFormModule {}
