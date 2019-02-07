import { Component, OnInit } from '@angular/core';
import { SignUp } from './sign-up';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  model = new SignUp()
  submit = false;

  constructor(private signUpService: SignUpService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
    this.signUpService.signUp(this.model);
    console.log("submission received");
    this.submit = true;
  }

}
