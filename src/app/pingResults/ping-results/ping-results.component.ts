import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { WebsiteService } from 'src/app/websites/website.service';
import { PingResultService } from '../ping-result.service';
import { PingResults } from '../pingResults.class';
import { Website } from 'src/app/websites/Website.class';
import { SendPingDto } from '../sendPingDto';

@Component({
  selector: 'app-ping-results',
  templateUrl: './ping-results.component.html',
  styleUrls: ['./ping-results.component.css']
})
export class PingResultsComponent {
  id:number =0;
  pingResults: PingResults[] = [];
  website!: Website;

  constructor (    
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private webSvc: WebsiteService,
    private pingResultSvc: PingResultService) {}

  ngOnInit() :void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.loadPingResults(this.id);

  }
  loadPingResults(id:number) {
    this.pingResultSvc.getPingResultsById(id).subscribe(
      res => {
        this.pingResults = res;
        console.log(this.pingResults);
      },
      err => {
        console.error(err);
      }
    );
    this.webSvc.getWebsiteByID(this.id).subscribe(
      res => {
        this.website = res;
        console.log(this.website);
      },
      err => {
        console.error(err);
      });

  }
  sendPing() {
    let pingDto: SendPingDto = new SendPingDto(this.website.url, this.website.id)
    this.pingResultSvc.sendPing(pingDto).subscribe(
      res => {
        console.log(res);
        this.loadPingResults(this.id);
      },
      err => {
        console.error(err);
      }
    )
  }
}
