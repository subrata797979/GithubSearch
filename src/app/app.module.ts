import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMainComponent } from './app-main/app-main.component';
import { AppSearchComponent } from './app-search/app-search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AppUsersComponent } from './app-users/app-users.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    AppSearchComponent,
    AppUsersComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
