import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login.service';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new Login()

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
    this.loginService.login(this.model);
    
  }

}
