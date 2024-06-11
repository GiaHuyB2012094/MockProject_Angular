import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentReviewRoomComponent } from './comment-review-room.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommentModule } from '../../components/comment/comment.module';



@NgModule({
  declarations: [
    CommentReviewRoomComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule, CommentModule,
  ],
  exports: [
    CommentReviewRoomComponent
  ],
})
export class CommentReviewRoomModule { }
