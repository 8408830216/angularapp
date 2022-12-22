import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  // userName=new Subject<any>();    //we cannot set initial value using Subject 
  userName=new BehaviorSubject('Angular UI Developer'); //we set initial value(default) using BehaviorSubject and store the current value
  constructor() { }
}