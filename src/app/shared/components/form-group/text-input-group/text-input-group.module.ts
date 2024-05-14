import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputGroupComponent } from './text-input-group.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TextInputGroupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [TextInputGroupComponent]
})
export class TextInputGroupModule { }
