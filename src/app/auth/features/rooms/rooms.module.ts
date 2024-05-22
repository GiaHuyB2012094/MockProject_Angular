import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomCardModule } from './components/room-card/room-card.module';
import { RoomsCardListModule } from './components/rooms-card-list/rooms-card-list.module';
import { SharedModule } from 'src/app/shared/shared.module';
// import { GeneralInfoRoomDetailComponent } from './container/general-info-room-detail/general-info-room-detail.component';

const MODULES = [RoomCardModule, RoomsCardListModule, SharedModule]
@NgModule({
  declarations: [RoomsComponent],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    
    ...MODULES,
  ]
})
export class RoomsModule { }
