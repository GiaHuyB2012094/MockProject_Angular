import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceDetailsComponent } from './invoice-details.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    InvoiceDetailsComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    InvoiceDetailsComponent
  ],
})
export class InvoiceDetailsModule { }
