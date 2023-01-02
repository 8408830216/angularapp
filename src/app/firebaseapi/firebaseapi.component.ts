import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-firebaseapi',
  templateUrl: './firebaseapi.component.html',
  styleUrls: ['./firebaseapi.component.css']
})
export class FirebaseapiComponent implements OnInit {

  constructor(private _firebaseService:FirebaseService) { }

  ngOnInit() {
  }

  createPostData(){
    this._firebaseService.createPost().subscribe(res =>{
      console.log('Firebase Post',res);
      
    })
  }
}
