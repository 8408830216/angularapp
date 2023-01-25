import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PracticeService } from '../services/practice.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component implements OnInit {


  
 username;
  constructor(private _practiceService:PracticeService,private _utilityService:UtilityService) { 
    this._utilityService.userName.subscribe((res)=>{
      console.log(res)
      this.username=res;

    })
  }//data pass from the _utilityService using subject and behavior subject

  
  ngOnInit() {
    this._practiceService.getAlbumData().subscribe(albData=>{
      console.log("Albums Data",albData);
    })
  }

}
