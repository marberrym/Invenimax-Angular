import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from './login';
import { LoginResponse } from './login-response';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

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
  model = new LoginResponse('success')

  login(data: Login): Subscription {
    return this.http.post<LoginResponse>(this.endPoint, data, this.httpOptions)
      .subscribe(res => {
        console.log(res)
        if (res.status === 'success') {
          window.localStorage.setItem('IMToken', res.token);
          // this.router.navigate([''])
        } else {
          console.log('invalid login')
        }
      })
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
}
