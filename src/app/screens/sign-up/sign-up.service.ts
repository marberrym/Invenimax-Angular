import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { SignUp } from './sign-up';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  endPoint = 'http://localhost:5000/signup'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  public signUp(data: SignUp) {
    return this.http.post(this.endPoint, data, this.httpOptions)
      .subscribe(res => {
        console.log(res)
        this.router.navigate([''])
      })
  }
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  
}
