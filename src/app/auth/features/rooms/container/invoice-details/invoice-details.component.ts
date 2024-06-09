import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
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
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { style } from '@angular/animations';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss'],
})
export class InvoiceDetailsComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
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

  @ViewChild('uploadPayImg') uploadPayImg!: ElementRef;

  payFormat = payFormat;
  user$!: Observable<IUser>;
  currentUser!: IUser;
  roomRootPrice!: number;

  bookings: any;

  isOpenShowPayWithATM = false;
  isOpenShowPayWithPayPal = false;

  selectedFile: File | null = null;
  uploadResponse: any = null;

  public paypalLoad: boolean = false;
  constructor(
    private store: Store,
    private toast: ToastService,
    private bookingService: BookingService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();

    this.bookingService
      .getBookings()
      .subscribe((data) => (this.bookings = data));
  }

  ngAfterViewInit(): void {}
  ngAfterViewChecked(): void {
    this.roomRootPrice =
      this.room.price[this.convertPriceFormat(this.priceFormat)];
  }

  getCurrentUser() {
    this.user$ = this.store.select(UserState.user);
    this.user$.subscribe((user) => {
      this.currentUser = user;
    });
  }

  convertPriceFormat(priceFormat: string): number {
    return this.payFormat.findIndex((pr) => pr.value === priceFormat);
  }

  submitPayHandle(): void {
    if (this.currentUser.id && this.payment) {
      const booking: IBooking = Object.assign(
        {},
        {
          roomID: this.room.id,
          userID: this.currentUser.id,
          fromDate: this.fromDate,
          toDate: this.toDate,
          duration: this.duration,
          priceFormat: this.priceFormat,
          payment: this.payment,
          roomPriceTotal: this.roomPriceTotal,
          tax: this.tax,
          services: this.services,
          priceTotal: this.priceTotal,
          userInfoBooking: this.userInfoBooking,
        }
      );

      if (this.payment === 'payLater') {
        this.bookingService.createBooking(booking).subscribe((success) => {
          if (success) {
            this.toast.showToast(
              TOAST_STATE.success,
              'You have successfully booking!'
            );
            this.dismissError();
          } else {
            this.toast.showToast(TOAST_STATE.danger, 'You have fail booking!');
            this.dismissError();
          }
        });
      } else if (this.payment === 'payPal') {
        this.isOpenShowPayWithPayPal = !this.isOpenShowPayWithPayPal;
      } else if (this.payment === 'payATM') {
        this.isOpenShowPayWithATM = !this.isOpenShowPayWithATM;

        if (this.uploadResponse?.url !== undefined) {
          booking.payATMimage = this.uploadResponse?.url;
          this.bookingService.createBooking(booking).subscribe((success) => {
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
          });
        }
      }
    }
  }

  uploadImage = async (event: Event) => {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    }
  };

  uploadPayImageHandle(): void {
    this.uploadPayImg.nativeElement.click();
  }
  confirmHandle(): void {
    if (this.selectedFile) {
      const url = `https://api.cloudinary.com/v1_1/${environment.cloudinaryCloudName}/image/upload`;
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('upload_preset', environment.cloudinaryUploadPreset);

      this.http.post(url, formData).subscribe(
        (response) => {
          this.uploadResponse = response;
        },
        (error) => {
          console.error('Error uploading file:', error);
          this.uploadResponse = { error: error.message };
        }
      );
    }
  }
  private dismissError(): void {
    setTimeout(() => {
      this.toast.dismissToast();
    }, 2000);
  }
}
