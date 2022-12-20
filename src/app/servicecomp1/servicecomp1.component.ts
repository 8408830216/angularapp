import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecomp1',
  templateUrl: './servicecomp1.component.html',
  styleUrls: ['./servicecomp1.component.css']
})
export class Servicecomp1Component implements OnInit {

  constructor(private _demoService:DemoService) { }

  ngOnInit() {
  }
  OnSubscribe(){
   this._demoService.display();
  }
}
