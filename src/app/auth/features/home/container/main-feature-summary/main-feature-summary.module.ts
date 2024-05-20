import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFeatureSummaryComponent } from './main-feature-summary.component';



@NgModule({
  declarations: [MainFeatureSummaryComponent],
  imports: [
    CommonModule
  ],
  exports: [MainFeatureSummaryComponent]
})
export class MainFeatureSummaryModule { }
