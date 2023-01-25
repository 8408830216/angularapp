import { Component, OnInit } from '@angular/core';
import { RapidgetService } from '../services/rapidget.service';

@Component({
  selector: 'app-rapidget',
  templateUrl: './rapidget.component.html',
  styleUrls: ['./rapidget.component.css']
})
export class RapidgetComponent implements OnInit {

  constructor(private _rapigetService:RapidgetService) { }

  ngOnInit() {
    this._rapigetService.getDataFromRapid().subscribe(res=>{
      console.log("Get Data from rapid api",res);
      
    })
  }

}
