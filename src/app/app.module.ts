import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMainComponent } from './app-main/app-main.component';
import { AppSearchComponent } from './app-search/app-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    AppSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
