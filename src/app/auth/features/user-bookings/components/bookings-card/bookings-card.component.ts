import { Component, Input, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/core/services/api/rooms.service';

@Component({
  selector: 'app-bookings-card',
  templateUrl: './bookings-card.component.html',
  styleUrls: ['./bookings-card.component.scss']
})
export class BookingsCardComponent implements OnInit{
  @Input() booking: any;
  isLoading = true;
  room: any;

  constructor(private roomService: RoomsService) {}
  
  ngOnInit(): void {
    this.roomService.getRoomById(this.booking.roomID).subscribe({
      next: (data) => {
        this.room = data;
        this.isLoading = false;
      },
      error: (err) => console.log(err),
    })
  }
}

