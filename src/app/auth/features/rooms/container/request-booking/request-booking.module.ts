import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestBookingComponent } from './request-booking.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RequestBookingComponent],
  imports: [CommonModule, SharedModule],
  exports: [RequestBookingComponent],
})
export class RequestBookingModule {}
