import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WebsiteService } from '../websites/website.service';
import { Observable } from 'rxjs';
import { PingResults } from './pingResults.class';
import { SendPingDto } from './sendPingDto';

@Injectable({
  providedIn: 'root'
})
export class PingResultService {
  url: string = "http://localhost:5555/api/pingresults";
  constructor(
    private http: HttpClient
  ) { }

  getPingResultsById(id:number) : Observable<PingResults[]> {
    return this.http.get(`${this.url}/website/${id}`) as Observable<PingResults[]>;
  }
  sendPing(ping:SendPingDto):Observable<any> {
    return this.http.post(this.url, ping) as Observable<any>;
  }
}
