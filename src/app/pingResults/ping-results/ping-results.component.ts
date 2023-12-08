import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { WebsiteService } from 'src/app/websites/website.service';

@Component({
  selector: 'app-ping-results',
  templateUrl: './ping-results.component.html',
  styleUrls: ['./ping-results.component.css']
})
export class PingResultsComponent {
  id:number =0;
  constructor (    
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private webSvc: WebsiteService) {}

  ngOnInit() :void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    
  }
}
