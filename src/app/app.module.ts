import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ListAllWebsitesComponent } from './websites/ListAllWebsites/ListAllWebsites.component';
import { PingResultsComponent } from './pingResults/ping-results/ping-results.component';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AddNewWebsiteComponent } from './websites/add-new-website/add-new-website.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { MenuComponent } from './menu/menu/menu.component';


 @NgModule({
  declarations: [
    AppComponent,
    ListAllWebsitesComponent,
    PingResultsComponent,
    AddNewWebsiteComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterLink,
    RouterModule
  ],
  providers: [MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
