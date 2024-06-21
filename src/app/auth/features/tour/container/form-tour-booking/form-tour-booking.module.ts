import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTourBookingComponent } from './form-tour-booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FormTourBookingComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule, SharedModule
  ],
  exports: [
    FormTourBookingComponent
  ],
})
export class FormTourBookingModule { }
