import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormChangeService } from 'src/app/core/services/form-change.service';

@Component({
  selector: 'app-confirm-leave',
  templateUrl: './confirm-leave.component.html',
  styleUrls: ['./confirm-leave.component.scss']
})
export class ConfirmLeaveComponent {
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  confirm() {
    this.confirmed.emit(true);
  }

  cancel() {
    this.confirmed.emit(false);
  }
}
