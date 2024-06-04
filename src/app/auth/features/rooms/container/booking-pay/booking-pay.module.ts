import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingPayComponent } from './booking-pay.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InvoiceDetailsModule } from '../invoice-details/invoice-details.module';



@NgModule({
  declarations: [
    BookingPayComponent
  ],
  imports: [
    CommonModule, SharedModule, InvoiceDetailsModule
  ],
  exports: [
    BookingPayComponent
  ],
})
export class BookingPayModule { }
