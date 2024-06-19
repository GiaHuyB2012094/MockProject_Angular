import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourCardComponent } from './tour-card.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TourCardComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    TourCardComponent
  ],
})
export class TourCardModule { }
