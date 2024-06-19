import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourHomeRoutingModule } from './tour-home-routing.module';
import { TourHomeComponent } from './tour-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TourCardListModule } from '../../components/tour-card-list/tour-card-list.module';


@NgModule({
  declarations: [
    TourHomeComponent
  ],
  imports: [
    CommonModule,
    TourHomeRoutingModule,
    SharedModule,
    TourCardListModule,

  ],
  exports: [
    TourHomeComponent,
  ]
})
export class TourHomeModule { }
