import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardSaveRoomComponent } from './list-card-save-room.component';
import { CardSaveRoomModule } from '../card-save-room/card-save-room.module';



@NgModule({
  declarations: [
    ListCardSaveRoomComponent
  ],
  imports: [
    CommonModule, CardSaveRoomModule
  ],
  exports: [
    ListCardSaveRoomComponent
  ],
})
export class ListCardSaveRoomModule { }
