import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WebsiteService } from '../website.service';
import { Website } from '../Website.class';
import { AddWebsiteDto } from '../AddWebsiteDto.class';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GlobalService } from 'src/app/core/global.service';
import { User } from 'src/app/users/user.class';
@Component({
  selector: 'app-add-new-website',
  templateUrl: './add-new-website.component.html',
  styleUrls: ['./add-new-website.component.css']
})
export class AddNewWebsiteComponent {
  website!: Website;
  websiteDto: AddWebsiteDto = new AddWebsiteDto();
  user!: User;
  constructor(
    private http: HttpClient,
    private router: Router,
    private websiteSvc: WebsiteService,
    private activatedRoute: ActivatedRoute,
    private globalSvc: GlobalService
  ) {}
  ngOnInit () : void{
    this.user = this.globalSvc.loggedInUser;
    this.websiteDto.userId = this.user.id;
  }
  addNewWebsite ():void {
    this.websiteSvc.addNewWebsite(this.websiteDto).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/ListAllWebsites']);
      });
  }
}
