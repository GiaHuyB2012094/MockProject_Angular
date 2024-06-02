import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserInfoBookingComponent } from './form-user-info-booking.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormUserInfoBookingComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [FormUserInfoBookingComponent],
})
export class FormUserInfoBookingModule {}
