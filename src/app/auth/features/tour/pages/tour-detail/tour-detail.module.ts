import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourDetailRoutingModule } from './tour-detail-routing.module';
import { TourDetailComponent } from './tour-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TourDetailComponent
  ],
  imports: [
    CommonModule,
    TourDetailRoutingModule,
    SharedModule
  ]
})
export class TourDetailModule { }
