import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvientRoomDetailComponent } from './convient-room-detail.component';

@NgModule({
  declarations: [
    ConvientRoomDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ConvientRoomDetailComponent
  ]
})
export class ConvientRoomDetailModule { }
