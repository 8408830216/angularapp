import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../models/student';

@Component({
  selector: 'app-formassignment',
  templateUrl: './formassignment.component.html',
  styleUrls: ['./formassignment.component.css']
})
export class FormassignmentComponent implements OnInit {
  defaultValue:string="UI Developer"
  student=new Student();
 submitted:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    this.submitted=true;
    this.student.name=form.value.name;
    this.student.email=form.value.email;
    this.student.password=form.value.password;
    this.student.dateOfBirth=form.value.dateOfBirth;
    this.student.gender=form.value.gender;
    this.student.city=form.value.city;
    this.student.pincode=form.value.pincode
    this.student.state=form.value.state
    this.student.country=form.value.country;
    this.student.course=form.value.course;
    this.saveStudentData(this.student)
   }
   saveStudentData(stu:Student){
    console.log(stu.name);
    console.log(stu.email);
    console.log(stu.password);
    console.log(stu.dateOfBirth);
    console.log(stu.gender);
    console.log(stu.country);
    console.log(stu.course);
   }

}
