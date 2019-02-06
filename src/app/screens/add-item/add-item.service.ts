import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {

  httpOptions = {
    headers: new HttpHeaders({
      'token': localStorage.getItem('IMToken'),
      'Content-Type': 'application/json'
    })
  }

  endPoint = 'http://localhost:5000/item/'
  
  constructor(
    private http: HttpClient
  ) {}

  addItem(locID, item) {
    return this.http.post(this.endPoint + locID, item, this.httpOptions)
    .subscribe(res => {
      console.log(res);
    })
  }
}
