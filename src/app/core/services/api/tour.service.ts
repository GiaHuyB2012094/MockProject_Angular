import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITour } from '../../models/interfaces/ITour';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  baseUrl = '/api/tours'

  toursBooking: ITour[] = []; 

  constructor(private http: HttpClient) { }
  
  getTours = (): Observable<any> => {
    return this.http.get<ITour[]>(this.baseUrl);
  }

  getTourById = (id: number): Observable<any> => {
    return this.http.get<ITour>(`${this.baseUrl}/${id}`);
  }

  addToursBooking = (tour: ITour): boolean => {
    let checkTourExited = this.toursBooking.some(tourB => tourB.id === tour.id)
    if (!checkTourExited) {
      this.toursBooking = [...this.toursBooking, tour];
      return true;
    } else return false;
  }

  deleteToursBooking = (id: number): boolean => {
    let toursTemp = [...this.toursBooking];
    toursTemp = toursTemp.filter(t => t.id !== id);
    this.toursBooking = [...toursTemp];
    console.log(this.toursBooking);
    return true;
  }

  calculateTourBooking = (tourBooking: any, tour: ITour): number => {
    return tourBooking.adult*tour.adult.price + tourBooking.children*tour.children.price;
  }

  calculateTourTotal = (tours: ITour[]): number =>{
    return tours.reduce((sum: number, tour: any) => (sum + tour.booking.total),0);
  }
}
