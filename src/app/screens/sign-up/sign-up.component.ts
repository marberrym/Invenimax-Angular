import { Component, OnInit } from '@angular/core';
import { SignUp } from './sign-up';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  model = new SignUp("", "", "", "", "")
  submit = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    let data = {
      name: this.model.name,
      org: this.model.org,
      email: this.model.email,
      password: this.model.pw
    }

    // this.http.post()
    console.log(data);
    
    console.log("submission received");
    this.submit = true;
  }

}
