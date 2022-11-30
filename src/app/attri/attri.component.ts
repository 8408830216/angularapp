import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attri',
  templateUrl: './attri.component.html',
  styleUrls: ['./attri.component.css']
})
export class AttriComponent implements OnInit {
  colorval = 'blue';
  uname:any;

  people: any[] = [
    {
      "name": "Jack",
      "country": "UK"
    },
    {
      "name": "Sumit",
      "country": "USA"
    },
    {
      "name": "Anup",
      "country": "HK"
    },
    {
      "name": "codemind",
      "country": "UK"
    },
    {
      "name": "Surya",
      "country": "USA"
    }
  ]

  constructor() { }
  show(value){
    this.uname=value;
    
  }

  ngOnInit() {
  }

}
