import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../services/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {

    res:any;
    newsData:any;
    qoutesData:any;
  constructor(private _rapiApiService:RapidapiService) { }

  ngOnInit() {
    this._rapiApiService.getDataBbFinance().subscribe(res=>{
      console.log('rapid finance data',res);
       this.res=res;
       this.newsData=this.res.news;
      this.qoutesData=this.res.quote;

    })
  }

}
