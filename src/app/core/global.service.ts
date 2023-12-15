import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginDto } from '../users/loginDto.class';
import { Observable, of } from 'rxjs';
import { User } from '../users/user.class';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  url: string = "http://localhost:5555/api/users"
  loggedInUser?: User | any;
constructor(
  private http:HttpClient
) { }
  public setLoggedInUser(user:User) :void {
    this.loggedInUser = user;
  }
  public getLoggedInUser() : Observable<any>{
    return of(this.loggedInUser);
  }
}
