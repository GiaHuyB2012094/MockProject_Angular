import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerEvaluationsComponent } from './customer-evaluations.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StarRatingModule } from '../../../rooms/components/star-rating/star-rating.module';
import { EvaluationsCardModule } from '../evaluations-card/evaluations-card.module';



@NgModule({
  declarations: [
    CustomerEvaluationsComponent
  ],
  imports: [
    CommonModule, SharedModule, EvaluationsCardModule
  ],
  exports: [
    CustomerEvaluationsComponent
  ],
})
export class CustomerEvaluationsModule { }
