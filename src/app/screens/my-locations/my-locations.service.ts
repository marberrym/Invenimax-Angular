import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Location } from './location';

@Injectable({
  providedIn: 'root'
})
export class MyLocationsService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:5000/locations';
  locations: Location[];

  getUserLocations(): Observable<Location[]> {
    return this.http.get(this.baseUrl).pipe(
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
