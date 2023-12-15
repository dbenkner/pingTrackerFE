import { ChangeDetectorRef, Component } from '@angular/core';
import { GlobalService } from 'src/app/core/global.service';
import { User } from 'src/app/users/user.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  user:User |any;

  constructor(
    private globalSvc: GlobalService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit() :void {
    this.globalSvc.getLoggedInUser().subscribe(
      res => {
        this.user = res;
        this.cdr.detectChanges();
      });
  }
  refresh() {
    this.globalSvc.getLoggedInUser().subscribe(
      res => {
        this.user = res;
        this.cdr.detectChanges();
      });
    console.log(this.user.username);
    console.log('hello');

  }
}
