import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devApiUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) {
   }

   getPostsData():Observable<any>{
    return this.httpClient.get(`${devApiUrl}posts`);
   }
   getPostById(id){
    return this.httpClient.get(`${devApiUrl}posts/` + id);
   }
   deletePostById(id){
    return this.httpClient.delete(`${devApiUrl}posts/` + id)
   }
}
