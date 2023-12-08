import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WebsiteService } from '../websites/website.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PingResultService {

  constructor(
    private http: HttpClient
  ) { }

  getPingResultsById(id:number) : Observable<>
}
