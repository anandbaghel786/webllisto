import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  public isEditMode: boolean = false;
  public userLoggedIn: boolean = false;
  public userNotAuth: boolean = false;
  hideLoginBtn: String = "";
  public headerOption: any = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private formBuilder: FormBuilder, private httpService: HttpClient, private router: Router, private appService: AppService) {

  }

  ngOnInit() {
    this.hideLoginBtn = window.location.href.split("/")[window.location.href.split("/").length - 1]
    this.loginForm = this.formBuilder.group({
      email: ["deejay.chat", [Validators.required]],
      password: ["Test@123", [Validators.required]]
    })
  }

  get f() { return this.loginForm.controls; }
  public async login() {
    await this.httpService.post("https://testwallet.angelium.net/api/jwt/api-token-auth/", this.loginForm.value, this.headerOption).subscribe(res => {
      console.log(res)
      localStorage.setItem("token", JSON.stringify({ token: res }));
      this.appService.isUserLoggedIn = true;
      this.router.navigate(["dashboard"])
    })

    // if (data) {
    //   console.log(data);
    // }
  }

  public logout() {
    localStorage.removeItem("token");
    this.userLoggedIn = localStorage.getItem("token") && JSON.parse(localStorage.getItem("token")).token ? true : false;
    this.router.navigate(["home"]);
  }

  public registerUser() {
    this.router.navigate(["registration"]);
  }

  resetForm() {
    this.loginForm.reset();
  }
}
