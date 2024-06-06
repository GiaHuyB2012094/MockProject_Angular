import { AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss']
})
export class PaymentOptionsComponent implements OnInit, AfterViewChecked{
  @Output() newItemEvent = new EventEmitter();
  @Input() fromDate !: Date;

  checkPayLater : boolean = false;

  formGroup = new FormGroup({
    payment: new FormControl('payATM'),
  });

  constructor (private rdc: ChangeDetectorRef) {}
  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.newItemEvent.emit(this.formGroup.value.payment);
    this.checkPayLater = this.checkPayLaterCondition();
    this.rdc.detectChanges();

  }

  checkPayLaterCondition(): boolean {
    const now = new Date();

    let diff_in_time = this.fromDate.getTime() - now.getTime();

    let diff_in_days = Math.round (diff_in_time / (1000 * 3600 * 24));
    
    if (diff_in_days > -1 && diff_in_days <= 2) {
      return false;
    } else return true;

  }
}
