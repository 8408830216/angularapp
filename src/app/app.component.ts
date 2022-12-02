import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  // uname='Iam from app componant'
  fromParentChild="Iam From app Componant"
  public uid: number;

data={
  fullName:"Prashant patil",
  city:"Pune",
  age:24,
  company:"Google",
  dept:"IT",
  position:"UI Developer",
  salary:70000,
}
foods: string[] = [];
bikes:any[]=[];

getDataFromChild(value) {
  console.log(value);
  this.foods.push(value);
}
getDataFromChildOut(value){
  console.log(value);
  this.bikes=value;
  
}
}
