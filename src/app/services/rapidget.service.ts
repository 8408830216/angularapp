import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidgetService {

  rapidUrl='https://yh-finance.p.rapidapi.com/market/v2/get-summary?region=US'
  constructor(private httpClient:HttpClient) { }

  getDataFromRapid(){
    let h=new HttpHeaders({
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
      'X-RapidAPI-Key': '5dfeeb6a0amsh9fad431ad6e584fp1f25a6jsn9f13fc4a4464'
    })
    return this.httpClient.get(this.rapidUrl ,{headers:h});
   } //injected in rapidget component
}
