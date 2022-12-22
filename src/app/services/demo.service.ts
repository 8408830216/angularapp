import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DemoService {

  apiUrl='https://jsonplaceholder.typicode.com/';
 
products=[
  {name:'Laptop',id:'101'},
  {name:'Mobile',id:'102'},
  {name:'MacBook',id:'103'}
]

  constructor(private http: HttpClient) { }   //dependency injection

  display(){
    alert('subscribed successfully')
  }
 
  getUsersData(){      //this method give the data from api ie users
    let users='users'
   return this.http.get(this.apiUrl+users);  
  }
  getPosts(){     //this method give the data from api ie posts
    let posts='posts';
    return this.http.get(this.apiUrl+ posts)
  }
}
