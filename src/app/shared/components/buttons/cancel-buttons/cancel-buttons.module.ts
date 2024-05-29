import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelButtonsComponent } from './cancel-buttons.component';



@NgModule({
  declarations: [
    CancelButtonsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CancelButtonsComponent]
})
export class CancelButtonsModule { }
