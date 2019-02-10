import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EditItemService {

  endPoint = 'http://localhost:5000/item/'

  constructor() { }

}
