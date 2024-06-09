import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceDetailsComponent } from './invoice-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [InvoiceDetailsComponent],
  imports: [CommonModule, SharedModule, HttpClientModule, NgxPayPalModule],
  exports: [InvoiceDetailsComponent],
})
export class InvoiceDetailsModule {}
