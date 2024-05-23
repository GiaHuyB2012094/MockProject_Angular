import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterRoomsComponent } from './filter-rooms.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FilterRoomsComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [FilterRoomsComponent]
})
export class FilterRoomsModule { }
