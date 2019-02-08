import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocationDetails } from './location-details';
import { Inventory } from './inventory';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocationDetailsService {

  httpOptions = { 
    headers: new HttpHeaders({
      'token': localStorage.getItem('IMToken')
    })
  }
  
  item: Inventory

  @Output() change: EventEmitter<Inventory> = new EventEmitter()

  endPoint = "http://localhost:5000/locations/"
  itemEndpoint = "http://localhost:5000/item/"

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  getLocationInfo(id) {
    return this.http.get<LocationDetails>(this.endPoint + id, this.httpOptions)
  }

  removeItem(id) {
    return this.http.delete(this.itemEndpoint + id, this.httpOptions)
  }

  editItem(row) {
    this.item = row;
    this.change.emit(this.item);
    this.router.navigate(['edititem']);
  }
}
