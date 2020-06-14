import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public isUserLoggedIn: boolean = false;
  constructor() { }

  public setUserSignedIn() {
    this.isUserLoggedIn = true;
  }


}
