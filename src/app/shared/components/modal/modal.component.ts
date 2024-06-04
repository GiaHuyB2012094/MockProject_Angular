import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string = 'Modal Title';
  @Input() visible: boolean = false;
  @Output() closeEvent = new EventEmitter();

  close() {
    this.visible = false;
    this.closeEvent.emit();
  }
}
