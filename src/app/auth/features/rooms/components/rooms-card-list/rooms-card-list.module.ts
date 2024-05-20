import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsCardListComponent } from './rooms-card-list.component';
import { RoomCardModule } from '../room-card/room-card.module';



@NgModule({
  declarations: [RoomsCardListComponent],
  imports: [
    CommonModule,
    RoomCardModule,
  ],
  exports: [RoomsCardListComponent]
})
export class RoomsCardListModule { }
