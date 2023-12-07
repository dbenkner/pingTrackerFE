import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAllWebsitesComponent } from './websites/ListAllWebsites/ListAllWebsites.component';

const routes: Routes = [
  {path: "", redirectTo:'/ListAllWebsites', pathMatch: "full"},
  {path: 'ListAllWebsites', component:ListAllWebsitesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
