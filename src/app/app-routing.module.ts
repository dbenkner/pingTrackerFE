import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAllWebsitesComponent } from './websites/ListAllWebsites/ListAllWebsites.component';
import { PingResultsComponent } from './pingResults/ping-results/ping-results.component';
import { AddNewWebsiteComponent } from './websites/add-new-website/add-new-website.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  {path: "", redirectTo:'/login', pathMatch: "full"},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'ListAllWebsites', component:ListAllWebsitesComponent},
  {path: 'addNewSite', component:AddNewWebsiteComponent},
  {path: 'pingResults/:id', component:PingResultsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
