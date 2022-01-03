import { Component, OnInit } from '@angular/core';
import {RestService} from "../../services/rest/rest.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.rest.getWeather('Brest').subscribe(weather => {
      console.log('jkrdjkjgrkjkdgjk')
      console.log(weather)
    })
  }

}
