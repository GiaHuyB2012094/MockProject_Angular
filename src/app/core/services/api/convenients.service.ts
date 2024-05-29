import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvenientsService {
  baseUrl = '/api/conveniences'

  constructor(private http: HttpClient) { }

  getConveniences = (): Observable<any> => {
    return this.http.get<string>(this.baseUrl);
  }

  
}
