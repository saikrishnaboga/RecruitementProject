import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { url } from 'inspector';
import { Observable } from 'rxjs';
import { userInterface } from './userList';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }
  private _url = "";


  
  getUsers(): Observable<userInterface[]>
  {
   return this._http.get<userInterface[]>
   (this._url)
  //  .pipe(catchError(this.errorHandler));
  }
    
  // errorHandler(error: HttpErrorResponse){
  //   return throwError(error.message || "a");
  // }
  


 
}
