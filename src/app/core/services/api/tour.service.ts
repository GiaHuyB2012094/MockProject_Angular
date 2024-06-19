import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITour } from '../../models/interfaces/ITour';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  baseUrl = '/api/tours'

  constructor(private http: HttpClient) { }

  getTours = (): Observable<any> => {
    return this.http.get<ITour[]>(this.baseUrl);
  }

  getTourById = (id: number): Observable<any> => {
    return this.http.get<ITour>(`${this.baseUrl}/${id}`);
  }
}
