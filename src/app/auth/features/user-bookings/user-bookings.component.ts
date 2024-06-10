import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from 'src/app/core/models/interfaces/IBreadcrumb.interface';
import { BookingService } from 'src/app/core/services/api/booking.service';

@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.scss']
})
export class UserBookingsComponent implements OnInit{
  breadcrumbs: IBreadcrumb[] = [
    {label: 'bookings', link: '/user-bookings'},
  ];
  isLoading = true;
  bookings: any;

  constructor(private bookingService: BookingService) {}
  
  ngOnInit(): void {
    this.bookingService.getBookings().subscribe({
      next: (data) => {
        this.bookings = data;
        this.isLoading = false;
      },
      error: (err) => console.log(err),
    })
  }
}
