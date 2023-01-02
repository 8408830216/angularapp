import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route:Router,private _authService:AuthService) { }

  ngOnInit() {
  }
  checkuser(uname ,password){

var output=this._authService.checkUserNameAndPassword(uname,password);
if(output==true){
  window.alert('Login Successfully');
  this._route.navigate(['product']);
}else{
  window.alert('Invalid username and password')
};
    // if(uname=='laptop' && password==='laptop'){
    //   this._route.navigate(['product/laptop']);
    // }else if(uname=='tablet' && password==='tablet'){
    //   this._route.navigate(['product/tablet']);
    // }else if(uname=='tv' && password==='tv'){
    //   this._route.navigate(['product/tv']);
    // }else if(uname=='washingmachine' && password==='washingmachine'){
    //   this._route.navigate(['product/washingmachine']);
    // }
  }
}
