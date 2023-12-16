import { HttpBackend } from '@angular/common/http';
import { Component } from '@angular/core';
import { GlobalService } from 'src/app/core/global.service';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { RegisterDto } from '../registerDto.class';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user:User = new User();
  registerDto: RegisterDto = new RegisterDto();
  message:string = "";
  constructor(
    private http :HttpBackend,
    private gobalSvc: GlobalService,
    private usrSvc: UserService,
    private route: Router
  ) {}

  ngOnIt(): void {

  }
  newUser(): void {
    this.usrSvc.registerUser(this.registerDto).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.error(err);
        this.message = err;
      }
    );
  }
}
