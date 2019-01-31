import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedin = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if (window.localStorage.IMToken) {
      this.loggedin = true;
    }
  }

  onLogout() {
    this.loggedin = false;
    window.localStorage.removeItem("IMToken");
    this.router.navigate(['']);
  }

}
