import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, concatMap, switchMap } from 'rxjs';
import { IBreadcrumb } from 'src/app/core/models/interfaces/IBreadcrumb.interface';
import { IUser } from 'src/app/core/models/interfaces/IUser.interface';
import { BookingService } from 'src/app/core/services/api/booking.service';
import { UserState } from 'src/app/core/store/states/user.state';

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
  currentUser!: IUser;
  user$!: Observable<any>;

  constructor(private bookingService: BookingService,
    private store: Store,

  ) {}
  
  ngOnInit(): void {
    this.user$ = this.store.select(UserState.user);

    this.user$
    .pipe(
      switchMap((user) => {
        this.currentUser = user
        return this.bookingService.getBookingOfUser(user.id)
      })
    )
    .subscribe({
      next: (data: any) => {
        this.isLoading = false;
        this.bookings = data;
        console.log(data)
      },
      error: (err: any) => console.error('Error:', err)
    },);
  }


}
