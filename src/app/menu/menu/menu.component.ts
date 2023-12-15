import { Component } from '@angular/core';
import { GlobalService } from 'src/app/core/global.service';
import { User } from 'src/app/users/user.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  user?:User;

  constructor(
    private globalSvc: GlobalService
  ) {}
  
}
