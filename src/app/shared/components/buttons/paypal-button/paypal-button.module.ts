import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaypalButtonComponent } from './paypal-button.component';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [PaypalButtonComponent],
  imports: [CommonModule, NgxPayPalModule],
  exports: [PaypalButtonComponent],
})
export class PaypalButtonModule {}
