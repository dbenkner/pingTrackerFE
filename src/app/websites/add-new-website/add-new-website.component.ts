import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WebsiteService } from '../website.service';
import { Website } from '../Website.class';
import { AddWebsiteDto } from '../AddWebsiteDto.class';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
@Component({
  selector: 'app-add-new-website',
  templateUrl: './add-new-website.component.html',
  styleUrls: ['./add-new-website.component.css']
})
export class AddNewWebsiteComponent {
  website!: Website;
  websiteDto: AddWebsiteDto = new AddWebsiteDto();
  constructor(
    private http: HttpClient,
    private router: Router,
    private websiteSvc: WebsiteService,
    private activatedRoute: ActivatedRoute,
  ) {}
  ngOnInit () : void{

  }
  addNewWebsite ():void {
    this.websiteSvc.addNewWebsite(this.websiteDto).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/ListAllWebsites']);
      });
  }
}
