import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppSearchComponent} from "./app-search/app-search.component";
import {AppAboutComponent} from "./app-about/app-about.component";
import {AppContactComponent} from "./app-contact/app-contact.component";
import {AppMainComponent} from "./app-main/app-main.component";

const routes: Routes = [
  { path: '', component: AppSearchComponent },
  { path: 'about', component: AppAboutComponent },
  { path: 'contact', component: AppContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
