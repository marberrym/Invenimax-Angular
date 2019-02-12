import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { ItemResponse } from './item-response';

@Injectable({
  providedIn: 'root'
})
export class EditItemService {

  httpOptions = { 
    headers: new HttpHeaders({
      'token': localStorage.getItem('IMToken')
    })
  }

  itemInfo: ItemResponse

  endPoint = 'http://localhost:5000/item/'

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getItem(storeid, itemid) {
    return this.http.get<ItemResponse>(this.endPoint + `${storeid}/${itemid}`, this.httpOptions)
  }

  newItemNote(itemid, body) {
    return this.http.post(`${this.endPoint}${itemid}/note`, body, this.httpOptions)
  }

  newTransaction(itemid, body) {
    return this.http.put(`${this.endPoint}${itemid}`, body, this.httpOptions)
  }

}
