import { Component, OnInit } from '@angular/core';
import { Website } from '../Website.class';
import { HttpClient } from '@angular/common/http';
import { WebsiteService } from '../website.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-ListAllWebsites',
  templateUrl: './ListAllWebsites.component.html',
  styleUrls: ['./ListAllWebsites.component.css']
})
export class ListAllWebsitesComponent implements OnInit {

  websites:Website[] = [];
  constructor(
    private http: HttpClient,
    private webSVC: WebsiteService
  ) { }

  ngOnInit() {
    this.webSVC.getAllWebsites().subscribe(
      res => {
        this.websites = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
