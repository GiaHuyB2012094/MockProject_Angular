import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalRoomCardListComponent } from './horizontal-room-card-list.component';
import { HorizontalRoomCardModule } from '../horizontal-room-card/horizontal-room-card.module';



@NgModule({
  declarations: [
    HorizontalRoomCardListComponent
  ],
  imports: [
    CommonModule,
    HorizontalRoomCardModule,
  ],
  exports: [HorizontalRoomCardListComponent]
})
export class HorizontalRoomCardListModule { }
