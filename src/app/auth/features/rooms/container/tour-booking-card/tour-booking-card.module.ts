import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourBookingCardComponent } from './tour-booking-card.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [TourBookingCardComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [TourBookingCardComponent],

})
export class TourBookingCardModule { }
