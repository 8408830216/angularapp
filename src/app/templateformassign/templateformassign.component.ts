import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from '../models/subscription';

@Component({
  selector: 'app-templateformassign',
  templateUrl: './templateformassign.component.html',
  styleUrls: ['./templateformassign.component.css']
})
export class TemplateformassignComponent implements OnInit {
  defaultValue:string="Advanced"
  submitted:boolean=false;
  subscription=new Subscription()
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    this.submitted=true;
this.subscription.email=form.value.email;
this.subscription.subscription=form.value.subscription;
this.subscription.password=form.value.password;
form.reset();
form.controls['subscription'].setValue('Advanced'); 
this.saveUserData(this.subscription);
  }
  saveUserData(sub:Subscription){
    console.log(sub.email);
    console.log(sub.subscription);
    console.log(sub.password);
    }

}
