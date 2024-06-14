import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule, SharedModule, ReactiveFormsModule
  ],
  exports: [
    CommentComponent
  ],
})
export class CommentModule { }
