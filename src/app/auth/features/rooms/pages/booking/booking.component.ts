import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IBreadcrumb } from 'src/app/core/models/interfaces/IBreadcrumb.interface';
import { IUser } from 'src/app/core/models/interfaces/IUser.interface';
import { RoomsService } from 'src/app/core/services/api/rooms.service';
import { UserService } from 'src/app/core/services/api/user.service';
import { UserState } from 'src/app/core/store/states/user.state';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit, AfterViewInit, OnDestroy, AfterViewChecked {
  // @Select()

  room: any;
  isLoading = true;

  breadcrumbs: IBreadcrumb[] = [{ label: 'rooms', link: '/rooms' }];
  roomID!: number;
  currentUser!: any;
  // checkin and checkout
  fromDate = new Date();
  toDate = new Date();
  duration = 1;
  roomPriceTotal = 0;
  priceFormat = 'hours';
  services = [];

  // 

  constructor(
    private roomsService: RoomsService,
    private activeRoute: ActivatedRoute,
    private store: Store,
    private userService: UserService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.roomID = Number(params.get('id'));
      this.getRoomData();
    });

    this.getCurrentUser();

  }
  ngAfterViewInit(): void {
  }

  ngAfterViewChecked(): void {
    this.fromDate = this.fromDate;
    this.toDate = this.toDate;
    this.duration = this.duration;
    this.roomPriceTotal = this.roomPriceTotal;
    this.priceFormat = this.priceFormat;
    this.services = this.services;
    this.cdr.detectChanges();

  }
  ngOnDestroy() {
    this.cdr.reattach();
  }

  getRoomData(): void {
    this.roomsService.getRoomById(this.roomID).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.room = data;
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
    // this.currentUser = this.store.select(UserState.loggedInUser);
    // this.currentUser.subscribe((data) => {
    //   console.log(data);
    // });
    this.currentUser = this.userService.getCurrentUser();
  }

  setCheckinAndCheckoutHandle(e: any){
    this.fromDate = e.fromDate;
    this.toDate = e.toDate;
    this.duration = e.duration;
    this.roomPriceTotal = e.priceTotal;
    this.priceFormat = e.priceFormat;
    this.services = e.services;

  }
}
