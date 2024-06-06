import {
  AfterViewChecked,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormUserInfoBookingModule } from './form-user-info-booking.module';

@Component({
  selector: 'app-form-user-info-booking',
  templateUrl: './form-user-info-booking.component.html',
  styleUrls: ['./form-user-info-booking.component.scss'],
})
export class FormUserInfoBookingComponent implements OnInit, AfterViewChecked {
  @Output() newItemEvent = new EventEmitter();

  checkboxUserBooking: string = 'guestStaying';

  // userBooking: any = 'guestStaying';

  formGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(250),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(250),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    customerUsername: new FormControl('', [
      Validators.minLength(1),
      Validators.maxLength(250),
    ]),
    userBooking: new FormControl('guestStaying'),
  });

  constructor() {}
  ngOnInit(): void {}
  ngAfterViewChecked(): void {
    this.submitHandle()
  }
  
  submitHandle() {
    const userInfor = {
      email: this.formGroup.value.email || '',
      username: this.formGroup.value.username || '',
      phone: this.formGroup.value.phone || '',
      customerUsername: this.formGroup.value.customerUsername || '',
    };
    this.newItemEvent.emit(userInfor);
  }
}
