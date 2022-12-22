import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  userName;
  constructor(private _utilityService:UtilityService) {
    this._utilityService.userName.subscribe(res => {
      this.userName = res;
    })
   }

  ngOnInit() {
  }
  updateUserName(uname) {
    let empdta={
      name:'Patil',
      id:'101'
    }
    console.log(uname.value); //we getting the enter value
    //next method is used to send msg(data) to an observable i.e userName
this._utilityService.userName.next(uname.value);   //we pass the value and it get update
// this._utilityService.userName.next(JSON.stringify(empdta));  //to pass the obj
  }
}

