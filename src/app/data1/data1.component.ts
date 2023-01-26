import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-data1',
  templateUrl: './data1.component.html',
  styleUrls: ['./data1.component.css']
})
export class Data1Component implements OnInit {

  datapass;
  constructor(private _dataService:DataService) {
this._dataService.datapass.subscribe((res)=>{
  this.datapass=res
})
   }

   

  ngOnInit() {
  }

}
