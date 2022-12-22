import { Component, OnInit } from '@angular/core';
import { BikeserviceService } from '../services/bikeservice.service';

@Component({
  selector: 'app-emp2',
  templateUrl: './emp2.component.html',
  styleUrls: ['./emp2.component.css']
})
export class Emp2Component implements OnInit {

  detailBikes:any;
  constructor(private _bikeServices:BikeserviceService) {
    this._bikeServices.detailBikes.subscribe(val=>{
      this.detailBikes=val;
      // console.log(this.detailBikes);
    })
   }

  ngOnInit() {

  }
  userBikeData(bname,cName,bPrice){
    this._bikeServices.detailBikes.next(bname.value);
    this._bikeServices.detailBikes.next(cName.value);
    this._bikeServices.detailBikes.next(bPrice.value);
   

    
  }
}
