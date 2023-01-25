import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devApiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  rapidUrl='https://yh-finance.p.rapidapi.com/market/v2/get-summary?region=USA'
  constructor(private _httpClient:HttpClient) {

   }
   getDataOfTodos():Observable<any>{
    return this._httpClient.get(`${devApiUrl}todos`)
   }  //get dada from json 
   getAlbumData():Observable<any>{
    return this._httpClient.get(`${devApiUrl}albums`)
   } //get data from json

}
