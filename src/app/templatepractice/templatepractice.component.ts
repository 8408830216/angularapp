import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Epmp } from '../models/epmp';

@Component({
  selector: 'app-templatepractice',
  templateUrl: './templatepractice.component.html',
  styleUrls: ['./templatepractice.component.css']
})
export class TemplatepracticeComponent implements OnInit {

  fname:string;
  lname:string;
  genderss:string;
  default: string="Mumbai";
  employees= new Epmp();
  submitted: boolean=false;
  defaultgender: string="Female";
  gender:string;


  minage:number=18;
  genders=[
    {
      id:'1',value:'Male'
    },
    { id:'2',value:'Female'}
  ]
  constructor() { }

  ngOnInit() {
  }
OnSubmit(form: NgForm){
  this.submitted=true;
  this.employees.fname=form.value.fname;
  this.employees.mname=form.value.mname;
  this.employees.lname=form.value.lname;
  this.employees.age=form.value.age;
  this.employees.email=form.value.email;
  this.employees.phone=form.value.phone;
  this.employees.city=form.value.city;
  this.employees.gender=form.value.gender;
  this.employees.password=form.value.password;
  this.employees.confirmpass=form.value.confirmpass;
  this.saveEmployeeData(this.employees)
  form.reset();
    form.controls['city'].setValue('Mumbai');
    form.controls['gender'].setValue('Female')
  console.log(form);
}
saveEmployeeData(emp:Epmp) {
  console.log(emp.fname);
  console.log(emp.mname);
  console.log(emp.lname);
  console.log(emp.age);
  console.log(emp.email);
  console.log(emp.phone);
  console.log(emp.city);
  console.log(emp.gender);
  console.log(emp.password);
  console.log(emp.confirmpass);

  
}
}


