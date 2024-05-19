import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectListComponent } from './select-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectListComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SelectListComponent],
})
export class SelectListModule {}
