import { Component, Input, OnInit } from '@angular/core';
import { IRoom } from 'src/app/core/models/interfaces/IRoom.interface';

@Component({
  selector: 'app-room-detail-info-booking',
  templateUrl: './room-detail-info-booking.component.html',
  styleUrls: ['./room-detail-info-booking.component.scss'],
})
export class RoomDetailInfoBookingComponent implements OnInit {
  @Input() room!: IRoom;
  @Input() duration: number = 1;
  @Input() fromDate = new Date();
  @Input() toDate = new Date();
  @Input() priceFormat = 'hours'

  checkin = new Date();
  checkout = new Date();

  ngOnInit(): void {
    this.checkout.setDate(this.checkin.getDate() + 1);
  }
}
