import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { DemoService } from './services/demo.service';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _demoService:DemoService,private _postService:PostService){

  }
  ngOnInit(): void {
    this._demoService.getUsersData().subscribe(data =>{
      console.log('data from API',data);
      
    })
    this._demoService.getPosts().subscribe(result =>{
      console.log('post data',result);
      
    })
  }
  data1:string
  name:string;
  price:number;
  product:Product=new Product(); 
  title = 'angularapp';
  // uname='Iam from app componant'
  fromParentChild="Iam From app Componant"
  public uid: number;
 
  employeeRecord:any=[
    {
      eName:"Dnyanesh",eCity:"Pune", eSalary:"200000"
    },
    {
      eName:"Sumit",eCity:"Mumbai", eSalary:"300000"
    }
  ]

data={
  fullName:"Prashant patil",
  city:"Pune",
  age:24,
  company:"Google",
  dept:"IT",
  position:"UI Developer",
  salary:70000,
}   //pass this parant data to the childassign comp using input decorator
foods: string[] = [];
bikes:any[]=[];

appchildExist: boolean = true;
destroy(): void {
  this.appchildExist = false;
}

getDataFromChild(value) {
  console.log(value);
  this.foods.push(value);
}
getDataFromChildOut(value){
  console.log(value);
  this.bikes=value;
  
}
handledata(value){
this.data1=value.target.value;
}

updateProduct(){
  // this.product=new Product();
  this.product.name=this.name;
  this.product.price=this.price;
}
deletePost(){
  this._postService.deletePostById(1).subscribe(res =>{
    console.log(res);       //delete method to delete api data by id
    
  })
}
}
