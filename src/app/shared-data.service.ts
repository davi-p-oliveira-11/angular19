import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  API_URL = "https://jsonplaceholder.typicode.com/users";

  constructor(private _http: HttpClient) { }

  userData = {
    id: 1,
    name: 'John',
    username: 'john',
    email: 'john@gmail.com',
    subscription: 'basic'
  }

  isEligibleForSubscription() {
    if (this.userData.subscription == 'basic' && this.userData.email.endsWith('@gmail.com')) {
      return true;
    } else {
      return false;
    }
  }

  getUserData() {
    return this._http.get(this.API_URL);
  }
}