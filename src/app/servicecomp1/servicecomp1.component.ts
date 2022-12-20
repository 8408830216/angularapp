import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecomp1',
  templateUrl: './servicecomp1.component.html',
  styleUrls: ['./servicecomp1.component.css']
})
export class Servicecomp1Component implements OnInit {

  productsss={};
  dataFromAPI={}
 
  //My Servicecomp1Component is depend on my DemoService
  constructor(private _demoService:DemoService) { }

  ngOnInit() {
    this.productsss= this._demoService.products;
    this._demoService.getUsersData().subscribe(data =>{
      console.log('data from api in Servicecomp1Component ',data);
      this.dataFromAPI=data;
    })
    
  }
  OnSubscribe(){
   this._demoService.display();
  }
}
