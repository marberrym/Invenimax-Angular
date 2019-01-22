import { Component, OnInit } from '@angular/core';
import { Login } from './login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  model = new Login("", "")

  constructor() { }

  ngOnInit() {
  }

}
