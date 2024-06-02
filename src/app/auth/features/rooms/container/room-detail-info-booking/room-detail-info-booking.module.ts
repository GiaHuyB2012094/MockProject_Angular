import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomDetailInfoBookingComponent } from './room-detail-info-booking.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RoomDetailInfoBookingComponent],
  imports: [CommonModule, SharedModule],
  exports: [RoomDetailInfoBookingComponent],
})
export class RoomDetailInfoBookingModule {}
