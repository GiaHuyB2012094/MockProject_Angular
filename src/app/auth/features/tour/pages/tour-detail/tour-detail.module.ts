import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourDetailRoutingModule } from './tour-detail-routing.module';
import { TourDetailComponent } from './tour-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HotelSuggestCardModule } from '../../components/hotel-suggest-card/hotel-suggest-card.module';
import { FormTourBookingModule } from '../../container/form-tour-booking/form-tour-booking.module';


@NgModule({
  declarations: [
    TourDetailComponent
  ],
  imports: [
    CommonModule,
    TourDetailRoutingModule,
    SharedModule,
    HotelSuggestCardModule, 
    FormTourBookingModule
  ]
})
export class TourDetailModule { }
