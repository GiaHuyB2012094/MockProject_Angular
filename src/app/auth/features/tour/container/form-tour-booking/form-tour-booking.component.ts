import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-tour-booking',
  templateUrl: './form-tour-booking.component.html',
  styleUrls: ['./form-tour-booking.component.scss']
})
export class FormTourBookingComponent {
  @Output() newItemEvent = new EventEmitter<any>();


  formGroup = new FormGroup({
    adult: new FormControl('', [
      Validators.required,
    ]),
    children: new FormControl('', [
      Validators.required,
    ]),
  });

  submitForm(): void{
    this.newItemEvent.emit({
      adult: this.formGroup.value.adult,
      children: this.formGroup.value.children,
    })
  }
}
