import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directassign',
  templateUrl: './directassign.component.html',
  styleUrls: ['./directassign.component.css']
})
export class DirectassignComponent implements OnInit {

  showSecret = false;
  log = [];
  constructor() { }
  ngOnInit() {}
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1) ;
  }
}
