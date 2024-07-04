import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationsCardComponent } from './evaluations-card.component';
import { StarRatingModule } from '../../../rooms/components/star-rating/star-rating.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    EvaluationsCardComponent
  ],
  imports: [
    CommonModule, StarRatingModule, SharedModule, CoreModule
  ],
  exports: [
    EvaluationsCardComponent
  ],
})
export class EvaluationsCardModule { }
