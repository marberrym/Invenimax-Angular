import { Component, OnInit } from '@angular/core';
import { SignUp } from './sign-up';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  model = new SignUp("", "", "", "", "")
  submit = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("submission received");
    this.submit = true;
  }

}
