import {Component, OnInit} from '@angular/core';
import {RestService} from "../../services/rest/rest.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  textInput = ''

  constructor(private rest: RestService) {
  }

  ngOnInit(): void {

  }

  findWeather() {
    this.rest.getWeather(this.textInput).subscribe(weather => {
      console.log('jkrdjkjgrkjkdgjk')
      console.log(weather)
    })
  }

}
