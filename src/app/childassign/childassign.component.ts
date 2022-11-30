import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-childassign',
  templateUrl: './childassign.component.html',
  styleUrls: ['./childassign.component.css']
})
export class ChildassignComponent implements OnInit {
  @Input() name:any
  constructor() { }

  ngOnInit() {
    console.log( this.name);
    
    
  }

}
