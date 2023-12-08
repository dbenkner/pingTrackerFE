import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAllWebsitesComponent } from './websites/ListAllWebsites/ListAllWebsites.component';
import { PingResultsComponent } from './pingResults/ping-results/ping-results.component';

const routes: Routes = [
  {path: "", redirectTo:'/ListAllWebsites', pathMatch: "full"},
  {path: 'ListAllWebsites', component:ListAllWebsitesComponent},
  {path: 'pingResults/:id', component:PingResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
