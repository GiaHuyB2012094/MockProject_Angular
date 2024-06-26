import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentReviewRoomComponent } from './comment-review-room.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommentModule } from '../../components/comment/comment.module';
import { WritingCommentEvaluationModule } from '../writing-comment-evaluation/writing-comment-evaluation.module';
import { StarRatingModule } from '../../components/star-rating/star-rating.module';
import { CommentGroupModule } from '../../components/comment-group/comment-group.module';



@NgModule({
  declarations: [
    CommentReviewRoomComponent
  ],
  imports: [
    CommonModule, SharedModule, CommentModule, WritingCommentEvaluationModule, StarRatingModule, CommentGroupModule
  ],
  exports: [
    CommentReviewRoomComponent
  ],
})
export class CommentReviewRoomModule { }
