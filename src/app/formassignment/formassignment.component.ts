import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formassignment',
  templateUrl: './formassignment.component.html',
  styleUrls: ['./formassignment.component.css']
})
export class FormassignmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    console.log(form);
    //console.log(form.value);
      }

}
