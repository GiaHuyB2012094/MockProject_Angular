import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormUserInfoBookingModule } from '../../container/form-user-info-booking/form-user-info-booking.module';
import { RoomDetailInfoBookingModule } from '../../container/room-detail-info-booking/room-detail-info-booking.module';
import { RequestBookingModule } from '../../container/request-booking/request-booking.module';
import { CancellationReschedulingPolicyModule } from '../../container/cancellation-rescheduling-policy/cancellation-rescheduling-policy.module';
import { BookingPayModule } from '../../container/booking-pay/booking-pay.module';
import { PaymentOptionsModule } from '../../container/payment-options/payment-options.module';
import { TourCardListModule } from '../../../tour/components/tour-card-list/tour-card-list.module';
import { TourBookingCardModule } from '../../container/tour-booking-card/tour-booking-card.module';
import { CoreModule } from 'src/app/core/core.module';
const MODULES = [
  FormUserInfoBookingModule,
  RoomDetailInfoBookingModule,
  RequestBookingModule,
  CancellationReschedulingPolicyModule,
  BookingPayModule,
  TourCardListModule,
  PaymentOptionsModule,
  TourBookingCardModule,
  CoreModule
];
@NgModule({
  declarations: [BookingComponent],
  imports: [CommonModule, BookingRoutingModule, SharedModule, ...MODULES],
})
export class BookingModule {}
