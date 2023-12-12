import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAllWebsitesComponent } from './websites/ListAllWebsites/ListAllWebsites.component';
import { PingResultsComponent } from './pingResults/ping-results/ping-results.component';
import { AddNewWebsiteComponent } from './websites/add-new-website/add-new-website.component';

const routes: Routes = [
  {path: "", redirectTo:'/ListAllWebsites', pathMatch: "full"},
  {path: 'ListAllWebsites', component:ListAllWebsitesComponent},
  {path: 'addNewSite', component:AddNewWebsiteComponent},
  {path: 'pingResults/:id', component:PingResultsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
