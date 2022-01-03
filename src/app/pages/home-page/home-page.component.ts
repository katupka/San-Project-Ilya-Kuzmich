import {Component, HostListener, OnInit} from '@angular/core';
import {RestService} from "../../services/rest/rest.service";
import {WeatherResponse} from "../../models/dto/weather-response";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  textInput = ''
  cols = 1;

  weatherList: Array<WeatherResponse> = []

  constructor(private rest: RestService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.cols = Math.floor(window.innerWidth / 300)
  }

  findWeather() {
    this.rest.getWeather(this.textInput).subscribe(weather => {
      this.weatherList.unshift(weather)
    })

    this.textInput = '';
  }

  deleteWeather(id: number) {
    this.weatherList.splice(id, 1);
    this.openSnackBar("Usunięto!")
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.cols = Math.floor(window.innerWidth / 300)
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "Ok", {duration: 1000, horizontalPosition: 'center'});
  }

}
