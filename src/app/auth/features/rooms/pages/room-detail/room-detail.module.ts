import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomDetailRoutingModule } from './room-detail-routing.module';
import { RoomDetailComponent } from './room-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShowImagesRoomModule } from '../../container/show-images-room/show-images-room.module';
import { GeneralInfoRoomDetailModule } from '../../container/general-info-room-detail/general-info-room-detail.module';
import { AddressRoomDetailModule } from '../../container/address-room-detail/address-room-detail.module';
import { ConvientRoomDetailModule } from '../../container/convient-room-detail/convient-room-detail.module';
import { FamousLandmarksRoomDetailModule } from '../../container/famous-landmarks-room-detail/famous-landmarks-room-detail.module';

const MODULES = [
  ShowImagesRoomModule,
  GeneralInfoRoomDetailModule,
  AddressRoomDetailModule,
  ConvientRoomDetailModule,
  FamousLandmarksRoomDetailModule,
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
