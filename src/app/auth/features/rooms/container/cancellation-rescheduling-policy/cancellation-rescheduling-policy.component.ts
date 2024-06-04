import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancellation-rescheduling-policy',
  templateUrl: './cancellation-rescheduling-policy.component.html',
  styleUrls: ['./cancellation-rescheduling-policy.component.scss'],
})
export class CancellationReschedulingPolicyComponent implements OnInit {
  @Input() depositRefund: number = 0;
  @Input() reschedulable: number = 0;

  depositRefundDate: Date = new Date();
  reschedulableDate: Date = new Date();

  ngOnInit(): void {
    this.depositRefundDate.setDate(
      this.depositRefundDate.getDate() + this.depositRefund
    );
    this.reschedulableDate.setDate(
      this.reschedulableDate.getDate() + this.reschedulable
    );
  }
}
