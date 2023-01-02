import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AdduserComponent } from './adduser/adduser.component';



@Injectable({
  providedIn: 'root'
})
export class UnsavedchangesGuard implements CanDeactivate<AdduserComponent> {
  
  canDeactivate(component: AdduserComponent){
if(component.userName.dirty){
  return window.confirm('You have unsaved changes ,are you want to navigate')
}else{
  return true;
}
}
}
//dirty means whether something is type or not
