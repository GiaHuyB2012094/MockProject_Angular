import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSaveRoomComponent } from './card-save-room.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CardSaveRoomComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    CardSaveRoomComponent
  ],
})
export class CardSaveRoomModule { }
