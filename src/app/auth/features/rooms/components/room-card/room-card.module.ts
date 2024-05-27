import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomCardComponent } from './room-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RoomCardComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [RoomCardComponent]
})
export class RoomCardModule { }
