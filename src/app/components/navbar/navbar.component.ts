import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/screens/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedin = false;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    if (window.localStorage.IMToken) {
      this.loggedin = true;
    }
    this.loginService.change.subscribe(isLoggedIn => {
      this.loggedin = isLoggedIn
    })

  }

  onLogout() {
    this.loggedin = false;
    window.localStorage.removeItem("IMToken");
    this.router.navigate(['']);
  }

}
