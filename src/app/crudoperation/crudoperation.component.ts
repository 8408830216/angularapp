import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Stud } from '../models/crud';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-crudoperation',
  templateUrl: './crudoperation.component.html',
  styleUrls: ['./crudoperation.component.css']
})
export class CrudoperationComponent implements OnInit {

  addData: boolean = false; // to show and hide data inputs
  btnAdd: string = "Add User Data"; // btn value
  dltById: any; // to store id to delete data
  name: string;
  email: string;
  course: string;
  fee: number;
  myReactiveForm: FormGroup;
  constructor(private _fb: FormBuilder, private _firebase: CrudService) {
    this.myReactiveForm = new FormGroup({
      'name' : new FormControl(''),
      'email' : new FormControl(''),
      'city' : new FormControl(''),
      'course' : new FormControl(''),
    })
   }
   showData: any;
  ngOnInit() {
    this.getData();
  }
  stud: Stud;
  stude: Stud;
  // functions 
  shoData(){
    
    
  }
  showInputs(){  // to show and hide functionality of data inputs
    if (this.addData == true) {
        this.addData = false;
        this.btnAdd = "Add User Data";
    } else {
      this.addData = true;
      this.btnAdd = "Close";
    }
  }
  createData(){
    console.log(this.myReactiveForm);
    this.stud = new Stud();
    this.stud.name = this.myReactiveForm['controls'].name.value;
    this.stud.email = this.myReactiveForm['controls'].email.value;
    this.stud.city = this.myReactiveForm['controls'].city.value;
    this.stud.course = this.myReactiveForm['controls'].course.value;
    console.log(this.stud);
    this._firebase.createPostData(this.stud).subscribe();
    this.getData();
  }
  getData(){
      this._firebase.getPostData().pipe(
        map(res=>{
          const postArray = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              postArray.push({...res[key], id: key});
            }
          }
          return postArray;
        })
      ).subscribe(
        res => {
          console.log("Map: ",res);
          this.showData = res;
        }
      );
  }
  editData(editId){
    this.stude = new Stud();
    this.stude.name = this.myReactiveForm['controls'].name.value;
    this.stude.email = this.myReactiveForm['controls'].email.value;
    this.stude.city = this.myReactiveForm['controls'].city.value;
    this.stude.course = this.myReactiveForm['controls'].course.value;

    console.log("Stude: ",this.stude);
    this._firebase.editPostData(editId, this.stude).subscribe();
    this.getData();
    // console.log("Edit: ", name.value, email.value, course.value, fee.value);
    
  }
  deleteData(deleteId){
    // console.log("delete called",deleteId);
    this._firebase.deletePostData(deleteId).subscribe(
      res=>{
        console.log("Deleted: ",res);
        
      }
    );
    this.getData();
  }
}

