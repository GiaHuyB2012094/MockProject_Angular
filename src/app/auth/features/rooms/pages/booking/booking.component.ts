import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ConfirmDeactivateGuard } from 'src/app/core/guards/confirm-leave.guard';
import { IBreadcrumb } from 'src/app/core/models/interfaces/IBreadcrumb.interface';
import { ITour } from 'src/app/core/models/interfaces/ITour';
import { IUser } from 'src/app/core/models/interfaces/IUser.interface';
import { RoomsService } from 'src/app/core/services/api/rooms.service';
import { TourService } from 'src/app/core/services/api/tour.service';
import { UserService } from 'src/app/core/services/api/user.service';
import { UserState } from 'src/app/core/store/states/user.state';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit, OnDestroy, AfterViewChecked {
  room: any;
  isLoading = true;
  breadcrumbs: IBreadcrumb[] = [{ label: 'rooms', link: '/rooms' }];
  roomID!: number;
// user account
  user$!: Observable<IUser>;
  currentUser!: IUser;
  // checkin and checkout
  fromDate = new Date();
  toDate = new Date();
  timeDate !: Date;
  duration!: number;
  roomPriceTotal!: number;
  priceFormat!: string;
  services: any;
  tax!: number;
  roomPrice!: number;
  priceTotal!: number;
  otherReqs!: string;

  userInfoBooking: any;
  payment = 'payATM'
  toursPriceTotal = 0;
  toursBookingList: ITour[] = [];
  constructor(
    private roomsService: RoomsService,
    private activeRoute: ActivatedRoute,
    private store: Store,
    private userService: UserService,
    private cdr: ChangeDetectorRef,
    private tourService: TourService,

    private confirmDeactivateGuard: ConfirmDeactivateGuard,
  ) {
    confirmDeactivateGuard.getConfirmationSubject().subscribe((confirmed) => {
      this.confirmationNeeded = false; // Hide dialog
      // Handle confirmation result if needed
    });
  }

  ngOnInit(): void {
    
    this.activeRoute.paramMap.subscribe((params) => {
      this.roomID = Number(params.get('id'));
      this.getRoomData();
    });

    this.getCurrentUser();

    this.setInitialBookingValue();

  }
  
  ngAfterViewChecked(): void {
    this.setUpdateBookingValue();
    this.getToursBookingList();
    this.toursPriceTotal = this.tourService.calculateTourTotal(this.toursBookingList)

  }
  
  setInitialBookingValue(): void{
    this.tax = 70000;
    this.fromDate = new Date();
    this.toDate.setDate(this.fromDate.getDate() + 1);
    this.duration = 1;
    this.roomPrice = this.room?.price[0] || 0;
    this.roomPriceTotal = this.room?.price[0] || 0;
    this.priceFormat= 'hour';
    this.services = [];
    
    this.priceTotal = this.tax + this.roomPrice ;
  }

  setUpdateBookingValue(): void{

    this.fromDate = this.fromDate;
    this.toDate = this.toDate;
    this.duration = this.duration;
    this.roomPriceTotal = this.roomPriceTotal;
    this.priceFormat = this.priceFormat;
    this.services = this.services;
    this.roomPrice = this.roomPrice;

    this.priceTotal = this.priceTotal + this.toursPriceTotal;
    this.timeDate = this.timeDate;

    this.userInfoBooking = this.userInfoBooking;

    this.cdr.detectChanges();
  }
  
  ngOnDestroy() {
    // this.cdr.reattach();
  }

  getToursBookingList () {
    this.toursBookingList =  this.tourService.toursBooking;
  }
  getRoomData(): void {
    this.roomsService.getRoomById(this.roomID).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.room = data;
        this.roomPrice = data.price[0];
        this.roomPriceTotal = data.price[0];
        this.breadcrumbs.push(
          {
            label: `${data.name}`,
            link: `/room/room-detail/${data.id}`,
          },
          { label: 'booking', link: `/room/booking/${data.id}` }
        );
      },
      error: (err) => console.log(err),
    });
  }

  getCurrentUser() {
    this.user$ = this.store.select(UserState.user);
    this.user$.subscribe((user) => {
      this.currentUser = user
    });
  }
  setUserInfoBookingHanlde(e: any): void{
    this.userInfoBooking = e;
  }
  setCheckinAndCheckoutHandle(e: any): void{
    this.fromDate = e.fromDate;
    this.toDate = e.toDate;
    this.duration = e.duration;
    this.roomPriceTotal = e.roomPriceTotal;
    this.priceFormat = e.priceFormat;
    this.services = e.services;
    this.timeDate = e.checkInTime;
    this.roomPrice = e.roomPrice;
    this.otherReqs = e.otherReqs;
    this.priceTotal = e.priceTotal;
  }
  setPayment(e: string): void{
    this.payment = e;
  }
  // 
  confirmationNeeded: boolean = false;

  onConfirmation(confirmed: boolean) {
    this.confirmDeactivateGuard.getConfirmationSubject().next(confirmed);
  }
}
