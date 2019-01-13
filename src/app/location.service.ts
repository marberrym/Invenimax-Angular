import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Location } from './location';

@Injectable({
  providedIn: 'root'
})

export class LocationService {

  baseUrl = 'http://localhost/api';
  locations: Location[];

  constructor(private http: HttpClient) {}

  getAll(): Observable<Location[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res) => {
        this.locations = res['data'];
        return this.locations;
      }),
      catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Error, did not contact API.')
  } 
}
