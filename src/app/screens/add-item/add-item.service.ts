import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

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
    private http: HttpClient,
    private router: Router
  ) {}

  addItem(locID, item) {
    return this.http.post(this.endPoint + locID, item, this.httpOptions)
    .subscribe(res => {
      console.log(res);
      this.router.navigate(['location'], { queryParams: { loc: locID }})
    })
  }
}
