import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core'; 
import { Product } from '../models/product';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit ,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
@Input() userid:number;
@Input() parentData:string;
@Input() product:Product;
@ContentChild("child",{static:false}) contentChild:ElementRef;
@ViewChild("childhook",{static:false}) viewChild:ElementRef;
pi;
counter;
num:number = 1;

  constructor() {
    this.pi=3.14;
    console.log("constructor called");
    
   }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
    
    this.contentChild.nativeElement.setAttribute('style','color:${this.parentData}');
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Called",this.viewChild);
    // this.viewChild.nativeElement.setAttribute('style','color:red');
    
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
    this.contentChild.nativeElement.setAttribute('style','color:${this.parentData}');
  }
  ngDoCheck(): void {
    console.log("ngDoCheck called",this.contentChild);
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called",this.contentChild);
    // this.contentChild.nativeElement.setAttribute('style','color:green')
    // this.contentChild.nativeElement.setAttribute('style','color:${this.parentData}');
  }
 
   ngOnDestroy(): void {
    console.log("ngOnDestroy");
    clearInterval(this.counter);
  }

 
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");  //it will called only when we change input property
    // console.log(this.parentData);
    
for (const propname in changes) {
  const prop=changes[propname];
  const{previousValue,currentValue,firstChange}=prop;  //Object destructuring
  console.log(`prop name ${propname}`);
  console.log(`prev value ${previousValue}`);
  console.log(`Current value ${currentValue}`);
  console.log(`First Change ${firstChange}`);
  console.log("===================================");
  
}
}
ngOnInit() {
  console.log("ngOnInit called");
  this.counter = setInterval(() => {
    this.num = this.num + 1 ;
    console.log(this.num);// api
  }, 1000)

}
  }
  
  //it will call constructor first always, its not depend on its position 
  //first constructor then ngOnChange and then ngOnInit 


