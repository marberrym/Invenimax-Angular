import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from './login';





@Injectable({
  providedIn: 'root'
})
export class LoginService {

  endPoint = "http://localhost:5000/login"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public login(data: Login) {
    return this.http.post(this.endPoint, data, this.httpOptions)
      .subscribe(res => {
        console.log(res)
        this.router.navigate([''])
      })
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
}
