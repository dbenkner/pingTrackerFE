import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';
import { loginDto } from './loginDto.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:5555/api/users';
  constructor(private http: HttpClient) { 
  }

  public loginUser(loginDto:loginDto) : Observable<User> {
    return this.http.put(`${this.url}/login`, loginDto) as Observable<User>;
  }
}
