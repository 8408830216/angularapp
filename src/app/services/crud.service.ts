import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stud } from '../models/crud';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url = 'https://crud-database-85cbf-default-rtdb.firebaseio.com/';
  constructor(private _httpClient:HttpClient) { }

  createPostData(stud: Stud){
    return this._httpClient.post(this.url+ 'crud.json', stud);
  }
  getPostData(){
    return this._httpClient.get(this.url+ 'crud.json');
  }
  editPostData(id: any, data): Observable<any>{
    return this._httpClient.put( this.url+ 'crud/'+id+'.json',  data);
  }
  deletePostData(id: any): Observable<any>{
    return this._httpClient.delete(this.url+ 'crud/'+id+'.json');
  }
}
