import { Component } from '@angular/core';
import { User } from '../user.class';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/core/global.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { loginDto } from '../loginDto.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user?:User;
  loginDto: loginDto = new loginDto();
  constructor(
    private http:HttpClient,
    private globalSvc:GlobalService,
    private route: Router,
    private userSvc: UserService
  ) {}
  ngOnInit() {
    this.user = this.globalSvc.loggedInUser;
  }
  login() :void {
    this.userSvc.loginUser(this.loginDto).subscribe(
      res => {
        this.user = res;
        this.globalSvc.setLoggedInUser(this.user);
        console.log(this.globalSvc.loggedInUser);
      },
      err => {
        console.error(err);
      });
      this.user = this.globalSvc.loggedInUser;
  }
}
