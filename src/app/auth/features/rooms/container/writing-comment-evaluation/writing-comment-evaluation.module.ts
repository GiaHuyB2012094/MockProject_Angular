import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WritingCommentEvaluationComponent } from './writing-comment-evaluation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { StarRatingModule } from '../../components/star-rating/star-rating.module';
import { CommentModule } from '../../components/comment/comment.module';
import { CommentGroupModule } from '../../components/comment-group/comment-group.module';



@NgModule({
  declarations: [
    WritingCommentEvaluationComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule, StarRatingModule, CommentModule, CommentGroupModule
  ],
  exports: [
    WritingCommentEvaluationComponent
  ],
})
export class WritingCommentEvaluationModule { }
