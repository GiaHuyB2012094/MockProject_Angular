import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentPaypalService {
  private paymentEndpoint = 'https://api.paypal.com/v1/payments/payment';

  constructor(private http: HttpClient) {}

  processPayment(paymentData: any): Observable<any> {
    return this.http.post(this.paymentEndpoint, paymentData);
  }
}
