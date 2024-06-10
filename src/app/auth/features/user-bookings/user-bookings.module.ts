import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBookingsRoutingModule } from './user-bookings-routing.module';
import { UserBookingsComponent } from './user-bookings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookingsCardModule } from './components/bookings-card/bookings-card.module';


@NgModule({
  declarations: [
    UserBookingsComponent
  ],
  imports: [
    CommonModule,
    UserBookingsRoutingModule,
    SharedModule,
    BookingsCardModule
  ]
})
export class UserBookingsModule { }
