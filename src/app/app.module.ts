import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {AboutUsPageComponent} from './pages/about-us-page/about-us-page.component';
import {AppRoutingModule} from "./modules/app-routing/app-routing.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMatModule} from "./modules/app-mat/app-mat.module";
import {MenuItemComponent} from './childs/menu-item/menu-item.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutUsPageComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMatModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
