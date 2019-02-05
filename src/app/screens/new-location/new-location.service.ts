import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Location } from './location';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class NewLocationService {

  baseUrl = 'http://localhost:5000';
  locations: Location[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'token': window.localStorage.IMToken
    })
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  newLocation(model) {
    return this.http.post(`${this.baseUrl}/locations`, model, this.httpOptions)
    .subscribe(res => {
      console.log(res)
    })
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Error, did not contact API.')
  } 
}
