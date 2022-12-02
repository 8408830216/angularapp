import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit ,OnChanges {
@Input() userid:number;
pi;
  constructor() {
    this.pi=3.14;
    console.log("HooksComponent constructor called");
    
   }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("HooksComponent ngOnChanges called");  //it will called only when we change input property
for (const propname in changes) {
  const prop=changes[propname];
  const{previousValue,currentValue,firstChange}=prop;
  console.log(`prop name ${propname}`);
  console.log(`prev value ${previousValue}`);
  console.log(`Current value ${currentValue}`);
  console.log(`First Change ${firstChange}`);
  console.log("===================================");
  
}
}
ngOnInit(): void {
  console.log("HooksComponent ngOnInit called");
}
  }
  
  //it will call constructor first always, its not depend on its position 
  //first constructor then ngOnChange and then ngOnInit 


