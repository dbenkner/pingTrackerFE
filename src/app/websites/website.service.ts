import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Website } from './Website';
import { AddWebsiteDto } from './AddWebsiteDto';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {
  url: string = "http://localhost:5555/api/websites";
  constructor(
    private http: HttpClient
  ) { }

  getAllWebsites(): Observable<Website[]> {
    return this.http.get(this.url) as Observable<Website[]>;
  }
  getWebsiteByID(id:number): Observable<Website> {
    return this.http.get(`${this.url}/${id}`) as Observable<Website>;
  }
  addNewWebsite(newSite:AddWebsiteDto): Observable<Website> {
    return this.http.post(this.url, newSite) as Observable<Website>;
  }
}
