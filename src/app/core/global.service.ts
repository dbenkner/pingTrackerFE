import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginDto } from '../users/loginDto.class';
import { Observable } from 'rxjs';
import { User } from '../users/user.class';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  url: string = "http://localhost:5555/api/users"
  loggedInUser?: User;
constructor(
  private http:HttpClient
) { }
  public setLoggedInUser(user:User) :void {
    this.loggedInUser = user;
  }
}
