import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoomRoutingModule } from './general-room-routing.module';
import { GeneralRoomComponent } from './general-room.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterRoomsModule } from '../../container/filter-rooms/filter-rooms.module';

const MODULES = [
  FilterRoomsModule
]

@NgModule({
  declarations: [GeneralRoomComponent],
  imports: [
    CommonModule,
    GeneralRoomRoutingModule,
    SharedModule,
    ...MODULES
  ],
  exports: [GeneralRoomComponent],
})
export class GeneralRoomModule { }
