import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule, SharedModule, ReactiveFormsModule, CoreModule
  ],
  exports: [
    CommentComponent
  ],
})
export class CommentModule { }
