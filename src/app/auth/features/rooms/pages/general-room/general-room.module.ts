import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoomRoutingModule } from './general-room-routing.module';
import { GeneralRoomComponent } from './general-room.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterRoomsModule } from '../../container/filter-rooms/filter-rooms.module';
import { HorizontalRoomCardListModule } from '../../components/horizontal-room-card-list/horizontal-room-card-list.module';

const MODULES = [
  FilterRoomsModule,
  HorizontalRoomCardListModule,
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
