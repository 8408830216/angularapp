import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devApiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  constructor(private _httpClient:HttpClient) {

   }
   getDataOfTodos():Observable<any>{
    return this._httpClient.get(`${devApiUrl}todos`)
   }
}
