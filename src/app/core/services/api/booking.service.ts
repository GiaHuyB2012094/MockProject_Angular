import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap, map, switchMap } from 'rxjs';
import { IBooking } from '../../models/interfaces/IBooking.interface';
import { RoomsService } from './rooms.service';
import { IRoom } from '../../models/interfaces/IRoom.interface';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  baseUrl = '/api/bookings';
  currentBooking: any;

  constructor(
    private http: HttpClient,
    private roomService: RoomsService,
  ) {}

  getBookings = (): Observable<any> => {
    return this.http.get<IBooking[]>(this.baseUrl);
  };

  getBookingOfUser = (id: number): Observable<any> => {
    return this.http.get<any>(this.baseUrl).pipe(
      map((bookings) => {
        const booking = bookings.filter((b: IBooking) => b.userID === id);
        return booking;
      })
    );
  };

  createBooking = (data: IBooking): Observable<any> => {
    data.status = 'successfull';

    const { roomID, userID, fromDate, toDate, timeDate, } = data;
    const currentBookingTemp = {roomID, userID , fromDate, toDate, timeDate};

    this.roomService.getRoomById(roomID)
      .pipe(
        concatMap((data) => {
          this.currentBooking = [...data.currentBooking, currentBookingTemp];
          data.currentBooking = this.currentBooking;
          return this.roomService.editRoom(data)
        })
      )
      .subscribe({
          next: () => console.log('Add current booking to room successfull'),
          error: (err) => console.log('Cannot add current booking to room ',err),
        })

    return this.http.post<any>(this.baseUrl, data);
  };
}
