import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchHomeModule } from './container/search-home/search-home.module';
import { MainFeatureSummaryModule } from './container/main-feature-summary/main-feature-summary.module';
import { RoomsCardListModule } from '../rooms/components/rooms-card-list/rooms-card-list.module';

const MODULES = [SearchHomeModule, RoomsCardListModule, MainFeatureSummaryModule]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ...MODULES,
  ]
})
export class HomeModule { }
