import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from './login';
import { LoginResponse } from './login-response';
import { Subscription } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  endPoint = "http://localhost:5000/login"
  isLoggedIn = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter()

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  model = new LoginResponse('success')

  login(data: Login): Subscription {
    return this.http.post<LoginResponse>(this.endPoint, data, this.httpOptions)
      .subscribe(res => {
        console.log(res)
        if (res.status === 'success') {
          window.localStorage.setItem('IMToken', res.token);
          this.isLoggedIn = true;
          this.change.emit(this.isLoggedIn)
          this.router.navigate([''])
        } else {
          console.log('invalid login')
        }
      })
  }

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }
}
