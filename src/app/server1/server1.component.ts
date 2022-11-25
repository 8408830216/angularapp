import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server1',
  templateUrl: './server1.component.html',
  styleUrls: ['./server1.component.css']
})
export class Server1Component implements OnInit {

  userName:string="Prashant0827";
  allowNewServer=false;

  constructor() { }

  ngOnInit() {
  }
  onClickReset(){
    this.userName=""
  }


}
