import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  userName;
  constructor(private _utilityService: UtilityService) {
    this._utilityService.userName.subscribe(res => {
      this.userName = res;
    })
  }

  ngOnInit() {
  }
  updateUserName(uname) {
    let empdta={
      name:'Prashant',
      id:'101'
    }
    console.log(uname.value); //we getting the enter value
    //next method is used to send msg(data) to an observable i.e userName
this._utilityService.userName.next(uname.value);   //we pass the value and it get update
// this._utilityService.userName.next(JSON.stringify(empdta));  //to pass the obj
  }
}

//if we change in one comp so there will be chnge in other 3 comp help of service 
//using subject and behavior subject
