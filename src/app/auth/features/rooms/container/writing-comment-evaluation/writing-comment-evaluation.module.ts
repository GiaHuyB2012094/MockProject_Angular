import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WritingCommentEvaluationComponent } from './writing-comment-evaluation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { StarRatingModule } from '../../components/star-rating/star-rating.module';



@NgModule({
  declarations: [
    WritingCommentEvaluationComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule, StarRatingModule
  ],
  exports: [
    WritingCommentEvaluationComponent
  ],
})
export class WritingCommentEvaluationModule { }