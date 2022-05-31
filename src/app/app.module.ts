import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMainComponent } from './app-main/app-main.component';
import { AppSearchComponent } from './app-search/app-search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AppUsersComponent } from './app-users/app-users.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppContactComponent } from './app-contact/app-contact.component';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    AppSearchComponent,
    AppUsersComponent,
    AppFooterComponent,
    AppAboutComponent,
    AppContactComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
