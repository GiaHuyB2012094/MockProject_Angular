import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentOptionsComponent } from './payment-options.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaymentOptionsComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [
    PaymentOptionsComponent
  ],
})
export class PaymentOptionsModule { }
