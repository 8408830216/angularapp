import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bikes } from '../models/bikes';


@Injectable({
  providedIn: 'root'
})
export class BikeserviceService {
  bikesData=new Bikes()
  detailBikes=new BehaviorSubject<any>(this.bikesData);
  constructor() { }
}
