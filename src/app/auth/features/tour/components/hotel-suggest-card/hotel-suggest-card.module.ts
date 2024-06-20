import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelSuggestCardComponent } from './hotel-suggest-card.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HotelSuggestCardComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    HotelSuggestCardComponent
  ],
})
export class HotelSuggestCardModule { }
