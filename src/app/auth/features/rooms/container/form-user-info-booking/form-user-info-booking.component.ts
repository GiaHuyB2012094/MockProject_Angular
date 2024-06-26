import {
  AfterViewChecked,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormUserInfoBookingModule } from './form-user-info-booking.module';
import { FormChangeService } from 'src/app/core/services/form-change.service';
import { ConfirmDeactivateGuard } from 'src/app/core/guards/confirm-leave.guard';

@Component({
  selector: 'app-form-user-info-booking',
  templateUrl: './form-user-info-booking.component.html',
  styleUrls: ['./form-user-info-booking.component.scss'],
})
export class FormUserInfoBookingComponent implements OnInit, AfterViewChecked, OnDestroy {
  @Output() newItemEvent = new EventEmitter();

  checkboxUserBooking: string = 'guestStaying';

  // userBooking: any = 'guestStaying';

  formGroup: any;

  constructor(
    private formChangedService: FormChangeService,
    private confirmDeactivateGuard: ConfirmDeactivateGuard,
  ) {
    this.formGroup = new FormGroup({
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
    
    this.formGroup.valueChanges.subscribe(() => {
      this.confirmDeactivateGuard.setConfirmationNeeded(true);
    });
  }

  ngOnInit(): void {
    this.formChangedService.setFormChanged(false);
  }

  ngAfterViewChecked(): void {
    this.submitHandle()
  }
  
  ngOnDestroy(): void {
    this.confirmDeactivateGuard.setConfirmationNeeded(false);  
  }


  submitHandle() {
    this.formChangedService.setFormChanged(true);
    const userInfor = {
      email: this.formGroup.value.email || '',
      username: this.formGroup.value.username || '',
      phone: this.formGroup.value.phone || '',
      customerUsername: this.formGroup.value.customerUsername || '',
    };
    this.newItemEvent.emit(userInfor);
  }
}
