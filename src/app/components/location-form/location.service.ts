import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Location } from './location';

@Injectable({
  providedIn: 'root'
})

export class LocationService {

  baseUrl = 'http://localhost:5000';
  locations: Location[];

  constructor(private http: HttpClient) {}

  getAll(): Observable<Location[]> {
    return this.http.get(`${this.baseUrl}/locations`).pipe(
      map((res) => {
        this.locations = res['data'];
        console.log(res)
        return this.locations;
      }),
      catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Error, did not contact API.')
  } 
}
