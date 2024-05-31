import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-switch-theme-mode',
  templateUrl: './switch-theme-mode.component.html',
  styleUrls: ['./switch-theme-mode.component.scss']
})
export class SwitchThemeModeComponent {
  @Output() newItemEvent = new EventEmitter<boolean>();
  isShowTheme = false;

  toggle() {
    this.isShowTheme = !this.isShowTheme;
    this.newItemEvent.emit(this.isShowTheme);
  }
}
