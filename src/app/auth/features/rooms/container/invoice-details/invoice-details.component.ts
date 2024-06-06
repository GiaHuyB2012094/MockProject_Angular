import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { payFormat } from 'src/app/core/constants/titles/room-type.constant';
import { TOAST_STATE } from 'src/app/core/constants/toast.constant';
import { IBooking } from 'src/app/core/models/interfaces/IBooking.interface';
import { IUser } from 'src/app/core/models/interfaces/IUser.interface';
import { BookingService } from 'src/app/core/services/api/booking.service';
import { RoomsService } from 'src/app/core/services/api/rooms.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserState } from 'src/app/core/store/states/user.state';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit, AfterViewChecked{
  @Input() roomPriceTotal!: number;
  @Input() room: any;
  @Input() duration!: number;
  @Input() priceFormat!: string;
  @Input() services: any;
  @Input() priceTotal!: number;
  @Input() tax!: number;
  @Input() serviceTotal!: number;
  @Input() otherReqs!: string;

  @Input() fromDate!: Date;
  @Input() toDate!: Date;
  @Input() timeDate!: Date;
  @Input() userInfoBooking: any;
  @Input() payment: string | undefined;

  payFormat = payFormat;
  user$!: Observable<IUser>;
  currentUser!: IUser;
  roomRootPrice!: number;

  constructor(
    private store: Store,
    private toast: ToastService, 
    private bookingService: BookingService,
  ){
  }
  ngOnInit(): void {
    this.getCurrentUser()
    console.log(payFormat);
    console.log(this.priceFormat);
  
  }
  ngAfterViewChecked(): void {
    this.roomRootPrice = this.room.price[this.convertPriceFormat(this.priceFormat)];
  }
  getCurrentUser() {
    this.user$ = this.store.select(UserState.user);
    this.user$.subscribe((user) => {
      this.currentUser = user
    });
  }

  convertPriceFormat(priceFormat: string): number{
    return this.payFormat.findIndex(pr => pr.value === priceFormat)
  }

  submitPayHandle(): void{
    const booking: any = Object.assign({},{
      roomID : this.room.id ,
      userID: this.currentUser.id ,
      fromDate: this.fromDate,
      toDate: this.toDate,
      duration: this.duration,
      priceFormat: this.priceFormat,
      payment: this.payment,
      roomPriceTotal: this.roomPriceTotal,
      tax: this.tax,
      services: this.services,
      userInfoBooking: this.userInfoBooking,
    })

    if (this.payment === 'payLater') {
      this.bookingService.createBooking(booking)
      .subscribe(
        success => {
          if (success) {
            this.toast.showToast(
              TOAST_STATE.success,
              'You have successfully booking!'
            );
            this.dismissError();
          } else {
            this.toast.showToast(
              TOAST_STATE.danger,
              'You have fail booking!'
            );
            this.dismissError();
          }
        }
      )

    } else if (this.payment === 'payPal') {

    } else if (this.payment === 'payATM') {

    }
  }

  private dismissError(): void {
    setTimeout(() => {
      this.toast.dismissToast();
    }, 2000);
  }
}
