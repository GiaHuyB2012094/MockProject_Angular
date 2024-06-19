import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourCardListComponent } from './tour-card-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TourCardModule } from '../tour-card/tour-card.module';



@NgModule({
  declarations: [
    TourCardListComponent
  ],
  imports: [
    CommonModule,SharedModule, TourCardModule
  ],
  exports: [
    TourCardListComponent
  ],
})
export class TourCardListModule { }
