import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailFormComponent } from './email-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EmailFormComponent],
  imports: [
    CommonModule,    
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [EmailFormComponent],
})
export class EmailFormModule { }
