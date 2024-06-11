import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterSavedRoomsComponent } from './filter-saved-rooms.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FilterSavedRoomsComponent
  ],
  imports: [
    CommonModule,SharedModule, ReactiveFormsModule
  ],
  exports: [
    FilterSavedRoomsComponent
  ],
})
export class FilterSavedRoomsModule { }
