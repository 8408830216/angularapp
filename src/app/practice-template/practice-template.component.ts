import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-practice-template',
  templateUrl: './practice-template.component.html',
  styleUrls: ['./practice-template.component.css']
})
export class PracticeTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
console.log(form.value.password);
console.log(form.value.cpassword);
  }

}
