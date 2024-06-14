import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentGroupComponent } from './comment-group.component';
import { CommentModule } from '../comment/comment.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CommentGroupComponent
  ],
  imports: [
    CommonModule, CommentModule, SharedModule
  ],
  exports: [
    CommentGroupComponent
  ],
})
export class CommentGroupModule { }
