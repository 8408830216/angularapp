import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FireBasePost } from '../models/firebasepost';
import { ReactiveFireBase } from '../models/reactiveFireBase';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private _httpClient: HttpClient) { }

  url = 'https://angular-crud-72aa7-default-rtdb.firebaseio.com/';  //firebaseURL
users:any[]=[
  {id:'101',name:'forRxjs',gender:'Male'},
  {id:'102',name:'forrxjs',gender:'Female'},
  {id:'103',name:'prashant',gender:'Male'}
]
  createPost() {
    let postData = {
      title: 'This is Angular8 crud',
      content: 'This is firebase crud operation with post'
    }
    return this._httpClient.post(this.url + 'posts.json',postData) //we will give any name instead of posts
  }
  createPostReactive(fireBasePost:FireBasePost){
    return this._httpClient.post(this.url + 'posts.json',fireBasePost)  //we store reactive form data in firebase database
  }
  getPostDataFirebase(){
    return this._httpClient.get(this.url + 'posts.json');
  }  //we get the data from firebase database

  postReactivePractice(reactiveFirebase:ReactiveFireBase){
    return this._httpClient.post(this.url +'reactive.json',reactiveFirebase)
  }
}
