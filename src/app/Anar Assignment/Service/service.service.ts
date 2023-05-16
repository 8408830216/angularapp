import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getTodosData(){
    const url='https://jsonplaceholder.typicode.com/todos'
    return this.http.get(url).pipe(
      map((res)=>res),
      catchError((err)=> this.handleError(err))
    )
  }
  handleError(err: any): any {
    return throwError(err);
  }
}
