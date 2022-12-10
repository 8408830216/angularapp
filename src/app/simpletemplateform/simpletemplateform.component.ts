import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';


@Component({
  selector: 'app-simpletemplateform',
  templateUrl: './simpletemplateform.component.html',
  styleUrls: ['./simpletemplateform.component.css']
})
export class SimpletemplateformComponent implements OnInit {
  defaultValue:string="Angular"
  defaultGender:string="Male"
  employee= new Employee();
  submitted:boolean=false;
  currentDate:any= new Date();
  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'}
  ]
  
  constructor() { }

  ngOnInit() {
  }

  OnSubmit(form:NgForm){
this.submitted=true;
this.employee.course=form.value.course;
this.employee.username=form.value.userDetails.username;
this.employee.email=form.value.userDetails.email;
this.employee.gender=form.value.gender;
form.reset();                                //it will reset the form
form.controls['course'].setValue('Angular');   //it will show the bydefault value
form.controls['gender'].setValue('Male');       //it will show the bydefault value
console.log(form.controls);

this.saveEmployeeData(this.employee);
}
  saveEmployeeData(emp:Employee){
console.log(emp.username);
console.log(emp.email);
console.log(emp.course);
console.log(emp.gender);
}
}
function moment(arg0: { year: number; month: number; day: number; }) {
  throw new Error('Function not implemented.');
}

