import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomDetailRoutingModule } from './room-detail-routing.module';
import { RoomDetailComponent } from './room-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShowImagesRoomModule } from '../../container/show-images-room/show-images-room.module';

const MODULES = [
  ShowImagesRoomModule
]

@NgModule({
  declarations: [RoomDetailComponent],
  imports: [
    CommonModule,
    RoomDetailRoutingModule,
    SharedModule,
    ...MODULES,
  ],
  exports: [RoomDetailComponent]
})
export class RoomDetailModule { }
