import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFireBase } from '../models/reactiveFireBase';
import { userData } from '../models/userDetails';
import { FirebaseService } from '../services/firebase.service';



@Component({
  selector: 'app-reactivepractice',
  templateUrl: './reactivepractice.component.html',
  styleUrls: ['./reactivepractice.component.css']
})
export class ReactivepracticeComponent implements OnInit {
  myFormDetails:FormGroup;
  submitted:boolean=false;
 
  // emailPattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]+$)";
  genders=[{id:'1',value:'Female'},{id:'2',value:'Male'}]
  user;
  userTwo:any[]=[];
  reactiveFirebase:ReactiveFireBase
  constructor(private _firebaseService:FirebaseService) { 
    this.createForm();
  }

  ngOnInit() {
   
  }
  createForm(){
   
    this.myFormDetails= new FormGroup({
      'firstname': new FormControl('',[Validators.required,Validators.maxLength(10)]),
      'lastname' : new FormControl('',[Validators.required,Validators.maxLength(10)]),
      'age': new FormControl('',[Validators.required,Validators.min(18),Validators.max(25)]),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'phone' : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'gender': new FormControl('Male'),
      'city':new FormControl('Pune'),
      'password':new FormControl('',Validators.required),
      'confirmPassword': new FormControl('',Validators.required),
     
    })

   
  }
  get firstname(){
    return this.myFormDetails.get('firstname')
  }
  
  get lastname(){
    return this.myFormDetails.get('lastname')
  }
  get age(){
    return this.myFormDetails.get('age')
  }
  get email(){
    return this.myFormDetails.get('email')
  }
  get phone(){
    return this.myFormDetails.get('phone')
  }
  get password(){
    return this.myFormDetails.get('password')
  }
  get confirmPassword(){
    return this.myFormDetails.get('confirmPassword')
  }
  onSubmit(){
    this.submitted = true;
console.log(this.myFormDetails)
    this.user=new userData()
this.user.firstname=this.myFormDetails.value.firstname;
this.user.lastname=this.myFormDetails.value.lastname;
this.user.age=this.myFormDetails.value.age;
this.user.email=this.myFormDetails.value.email;
this.user.phone=this.myFormDetails.value.phone;
this.user.city=this.myFormDetails.value.city;
this.user.gender=this.myFormDetails.value.gender;
this.user.password=this.myFormDetails.value.password;
this.user.confirmPassword=this.myFormDetails.value.confirmPassword;
this.userTwo.push(this.user);
console.log(this.myFormDetails.value)

this.reactiveFirebase=new ReactiveFireBase();
this.reactiveFirebase.firstname=this.myFormDetails['controls'].firstname.value
this.reactiveFirebase.lastname=this.myFormDetails['controls'].lastname.value
this.reactiveFirebase.age=this.myFormDetails['controls'].age.value
this.reactiveFirebase.email=this.myFormDetails['controls'].email.value
this.reactiveFirebase.phone=this.myFormDetails['controls'].phone.value
this.reactiveFirebase.city=this.myFormDetails['controls'].city.value
this.reactiveFirebase.gender=this.myFormDetails['controls'].gender.value
this.reactiveFirebase.password=this.myFormDetails['controls'].password.value

this._firebaseService.postReactivePractice(this.reactiveFirebase).subscribe(data =>{
  console.log('Post Data from reactiveForm Practice',data);
  
})
  }


}

