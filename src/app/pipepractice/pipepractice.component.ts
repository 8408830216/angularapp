import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipepractice',
  templateUrl: './pipepractice.component.html',
  styleUrls: ['./pipepractice.component.css']
})
export class PipepracticeComponent implements OnInit {

  todaysDte=new Date();
  price:number=10000;
percent1:number=0.8775;
percent2:number=0.78855;
  dataObj={
    courseName:'Angular Developer',
    courseFees:'20000',
    courseDuration:'4 Months'

  }
  decimal1:number=7.5866545;
  decimal2:number=1.264578;
  constructor() { }

  ngOnInit() {
  }

}
