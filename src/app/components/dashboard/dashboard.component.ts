import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { PercentPipe } from '@angular/common';
import { nearer } from 'q';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myForm: FormGroup;
  currentUserProfile: any = {};
  skilldetail: FormArray;
  submitted = false;
  public empIndex: any;
  public employees: Array<any> = [];
  public byname: String = "";
  public byemail: String = "";
  public isEditMode: boolean = false;
  public coin: String = "";
  public prev: String = "";
  public curr: String = "";
  public coinbiasArr: Array<any> = [];
  public newArr: Array<any> = [];
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {

  }

  displayUI() {

  }

  renderUI() {

    // this.coinbiasArr.push(["h", "h"])
    // this.coinbiasArr[this.coinbiasArr.length - 1] = ["h", "h", "h"];
    // this.coinbiasArr.push(["t", "t"])
    // console.log(this.coinbiasArr)
    if (this.coin == "") {
      alert("Choose head or tail");
    }
    else {
      this.curr = this.coin;
      console.log(this.curr + "   " + this.prev)
      if (this.newArr.length == 0) {
        this.newArr.push(this.curr)
        this.prev = this.curr;
      }
      else {
        if (this.prev == this.curr) {
          this.newArr.push(this.curr)
          this.prev = this.curr;
        }
        else {
          this.newArr.length = 0;
          this.newArr.push(this.curr)
          this.prev = this.curr;
        }
      }

      if (this.coinbiasArr.length == 0) {
        // console.log(this.newArr)
        this.coinbiasArr.push(this.newArr.splice(0))
        console.log(this.coinbiasArr)
      }
      else {
        // console.log(this.newArr)
        if (this.coinbiasArr[this.coinbiasArr.length - 1].includes(this.curr)) {
          console.log("AAA")
          this.coinbiasArr[this.coinbiasArr.length - 1].splice(this.coinbiasArr.length, 0, this.curr);
          console.log(this.coinbiasArr)
        }
        else {
          console.log("BBB")
          this.coinbiasArr.push(this.newArr.splice(0));
          console.log(this.coinbiasArr)
        }
      }
      // console.log(this.coinbiasArr);
    }
  }

}
