import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomePageComponent} from "../../pages/home-page/home-page.component";
import {AboutUsPageComponent} from "../../pages/about-us-page/about-us-page.component";
import {ContactPageComponent} from "../../pages/contact-page/contact-page.component";

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'about-us', component: AboutUsPageComponent},
  {path: 'contact', component: ContactPageComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
