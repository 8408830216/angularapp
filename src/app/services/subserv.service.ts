import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubservService {

  practice=new BehaviorSubject('Practice on Passing the data')
  constructor() { }
}
