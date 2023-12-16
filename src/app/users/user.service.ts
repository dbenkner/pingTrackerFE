import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';
import { loginDto } from './loginDto.class';
import { RegisterDto } from './registerDto.class';

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
  public registerUser(registerDto: RegisterDto) : Observable<any>{
    return this.http.post(`${this.url}/register`, registerDto) as Observable<any>;
  }
}
