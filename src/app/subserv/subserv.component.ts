import { Component, OnInit } from '@angular/core';
import { SubservService } from '../services/subserv.service';

@Component({
  selector: 'app-subserv',
  templateUrl: './subserv.component.html',
  styleUrls: ['./subserv.component.css']
})
export class SubservComponent implements OnInit {
  practice;
  constructor(private _subservService:SubservService) {
this._subservService.practice.subscribe((res)=>{
  console.log(res);
  this.practice=res
})
   }

  ngOnInit() {
  }

}
