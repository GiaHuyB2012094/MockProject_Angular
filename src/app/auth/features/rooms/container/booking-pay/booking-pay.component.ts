import { AfterViewChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { TOAST_STATE } from 'src/app/core/constants/toast.constant';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-booking-pay',
  templateUrl: './booking-pay.component.html',
  styleUrls: ['./booking-pay.component.scss']
})
export class BookingPayComponent implements OnInit, AfterViewChecked{
  @Input() roomPriceTotal!: number;
  @Input() room: any;
  @Input() duration!: number;
  @Input() priceFormat!: string;
  @Input() services: any;
  @Input() priceTotal!: number;
  @Input() tax!: number;
  @Input() otherReqs!: string;

  @Input() fromDate!: Date;
  @Input() toDate!: Date;
  @Input() timeDate!: Date;
  @Input() userInfoBooking: any;
  @Input() payment: string | undefined;

  serviceTotal = 0;
  showModal: boolean = false;

  constructor(
    private toast: ToastService, 
  ) {}

  ngOnInit(): void {
   }
  ngAfterViewChecked(): void {

    this.serviceTotal = this.calculateSerivePrice();  
  }
  openModal() {
    const {email, username, phone, customerUsername} = this.userInfoBooking;

    if (email === '' || username === '' || phone === '') {
      this.toast.showToast(
        TOAST_STATE.danger,
        'Please, Enter the complete information of the personal booking this room'
      );
      this.dismissError();
    } else {
      this.showModal = true;
    }
  }
  
closeModal() {
    this.showModal = false;
  }

  calculateSerivePrice(): number {
    return this.services.reduce((sum: number, currentService: any) => sum + currentService.totalPrice, 0);
  }

  private dismissError(): void {
    setTimeout(() => {
      this.toast.dismissToast();
    }, 2000);
  }
}
