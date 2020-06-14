import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'anguar';
  hideLoginBtn: String = "";
  isUserLoggedIn: boolean = false;
  constructor(private appService: AppService, private router: Router) {

  }

  ngOnInit() {

    this.hideLoginBtn = window.location.href.split("/")[window.location.href.split("/").length - 1];
    if (localStorage.getItem("token") && localStorage.getItem("token")) {
      this.appService.isUserLoggedIn = true;

    }
  }


  logout() {
    this.appService.isUserLoggedIn = false;
    localStorage.removeItem("token");
    this.router.navigate(["home"])

  }


  goToLogin() {
    this.router.navigate(["login"])
  }
}
