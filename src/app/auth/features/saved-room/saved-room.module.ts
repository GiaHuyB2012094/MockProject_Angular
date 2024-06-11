import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavedRoomRoutingModule } from './saved-room-routing.module';
import { SavedRoomComponent } from './saved-room.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterSavedRoomsModule } from './container/filter-saved-rooms/filter-saved-rooms.module';
import { ListCardSaveRoomModule } from './components/list-card-save-room/list-card-save-room.module';


@NgModule({
  declarations: [
    SavedRoomComponent
  ],
  imports: [
    CommonModule,
    SavedRoomRoutingModule,
    SharedModule,
    FilterSavedRoomsModule,
    ListCardSaveRoomModule,
  ]
})
export class SavedRoomModule { }
