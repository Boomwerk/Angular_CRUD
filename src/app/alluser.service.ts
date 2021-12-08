import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AlluserService {

  constructor(private http:HttpClient) { }
  

  selectAllUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
