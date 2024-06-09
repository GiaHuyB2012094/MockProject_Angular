import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IBooking } from '../../models/interfaces/IBooking.interface';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  baseUrl = '/api/bookings';

  constructor(private http: HttpClient) {}

  getBookings = (): Observable<any> => {
    return this.http.get<IBooking[]>(this.baseUrl);
  };

  getBookingOfUser = (id: number): Observable<any> => {
    return this.http.get<any>(this.baseUrl).pipe(
      map((bookings) => {
        const booking = bookings.find((b: IBooking) => b.userID === id);
        return booking;
      })
    );
  };

  createBooking = (data: IBooking): Observable<any> => {
    data.status = 'successfull';
    return this.http.post<any>(this.baseUrl, data);
  };
}
