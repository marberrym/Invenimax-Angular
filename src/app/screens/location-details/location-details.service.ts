import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocationDetails } from './location-details';

@Injectable({
  providedIn: 'root'
})
export class LocationDetailsService {
  location: LocationDetails

  httpOptions = { 
    headers: new HttpHeaders({
      'token': localStorage.getItem('IMToken')
    })
  } 

  endPoint = "http://localhost:5000/locations/"
  constructor(
    private http: HttpClient
  ) {}

  getLocationInfo(id) {
    console.log(this.httpOptions);
    this.http.get(this.endPoint + id, this.httpOptions)
    .subscribe(res => {
      console.log(res);
    })
  }
}
