import { Component, OnInit } from '@angular/core';
import { Website } from '../Website.class';
import { HttpClient } from '@angular/common/http';
import { WebsiteService } from '../website.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { User } from 'src/app/users/user.class';
import { GlobalService } from 'src/app/core/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ListAllWebsites',
  templateUrl: './ListAllWebsites.component.html',
  styleUrls: ['./ListAllWebsites.component.css']
})
export class ListAllWebsitesComponent implements OnInit {
  user! :User;

  websites:Website[] = [];
  constructor(
    private http: HttpClient,
    private webSVC: WebsiteService,
    private globalSvc: GlobalService,
    private route: Router
  ) { }

  ngOnInit() {
    this.user = this.globalSvc.loggedInUser;
    if(this.user === undefined) {
      this.route.navigate(['/login']);
    }
  
    this.webSVC.getWebsitesByUserId(this.user.id).subscribe(
      res => {
        this.websites = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
