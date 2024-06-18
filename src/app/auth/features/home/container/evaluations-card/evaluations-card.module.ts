import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationsCardComponent } from './evaluations-card.component';
import { StarRatingModule } from '../../../rooms/components/star-rating/star-rating.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    EvaluationsCardComponent
  ],
  imports: [
    CommonModule, StarRatingModule, SharedModule
  ],
  exports: [
    EvaluationsCardComponent
  ],
})
export class EvaluationsCardModule { }
