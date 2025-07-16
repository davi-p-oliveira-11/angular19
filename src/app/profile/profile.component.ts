import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  // below code for services & DI

  dummyData: any;
  isEligible: boolean;
  apiData: any;
  constructor(private _sharedData: SharedDataService) {
    this.dummyData = this._sharedData.userData;

    this.isEligible = this._sharedData.isEligibleForSubscription();
  }

  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this._sharedData.getUserData().subscribe(res => {
      this.apiData = res;
    })
  }

  // userData = {
  //   id : 1,
  //   name : 'John',
  //   username : 'john',
  //   email : 'john@gmail.com' 
  // }
}