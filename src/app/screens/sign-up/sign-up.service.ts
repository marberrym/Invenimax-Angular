import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { SignUp } from './sign-up';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


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

  source = throwError('This is an error!')
  
  public signUp(data: SignUp) {
    console.log("Runs Function.")
    return this.http.post(this.endPoint, data, this.httpOptions)
      .subscribe(res => console.log(res))
  }

  public handleError(err) {
    console.log(err)
  }
  
  constructor(private http: HttpClient) {}

  
}
