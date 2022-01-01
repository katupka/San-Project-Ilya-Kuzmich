import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import {AppRoutingModule} from "./modules/app-routing/app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppMatModule} from "./modules/app-mat/app-mat.module";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutUsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMatModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
