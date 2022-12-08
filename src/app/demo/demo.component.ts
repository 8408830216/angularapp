import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  @Input() myInputMsg:string;
  // @Input() employeeName:string;
  @Output() foodevent: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
    // console.log('from parent',this.myInputMsg);
    // console.log('from parent',this.employeeName);
  }
  addtofood(value) {
    // foodevent is nothing but your custom event 
    this.foodevent.emit(value);}


}
