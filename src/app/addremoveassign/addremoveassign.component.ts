

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addremoveassign',
  templateUrl: './addremoveassign.component.html',
  styleUrls: ['./addremoveassign.component.css']
})
export class AddremoveassignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  users=[];

  onclick(add){
this.users.push(add.value);
add.value = '';
}
ondelete(delet){
this.users.splice(delet,1);
}

}
