import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Bikes } from '../assigndirective/bikes';

@Component({
  selector: 'app-outputassign',
  templateUrl: './outputassign.component.html',
  styleUrls: ['./outputassign.component.css']
})
export class OutputassignComponent implements OnInit {
@Output() bikesDetail:EventEmitter<object>=new EventEmitter<object>();
  constructor() { }

bikes:Bikes[]=[
  {bike_name:"NINJA",bike_company:"KAWASAKI",on_road_price:"10Lakh" ,model:2020 ,mileage:"10Km/Lit"},
  {bike_name:"Duke1200",bike_company:"KTM",on_road_price:"12Lakh" ,model:2022 ,mileage:"15Km/Lit"},
  {bike_name:"HAYABUSA",bike_company:"SUZUKI",on_road_price:"15Lakh" ,model:2021 ,mileage:"07Km/Lit"},
  {bike_name:"JAWA",bike_company:"JAWA MOTO",on_road_price:"4Lakh" ,model:2022 ,mileage:"35Km/Lit"}
]

  ngOnInit() {
  }

  getObject(){
    this.bikesDetail.emit(this.bikes)
  }

}
