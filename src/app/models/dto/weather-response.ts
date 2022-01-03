import {Coord} from "./coord";
import {Weather} from "./weather";
import {Main} from "./main";
import {Sys} from "./sys";
import {Wind} from "./wind";
import {Clouds} from "./clouds";

export class WeatherResponse {
  coord: Coord;
  weather: Array<Weather> = [];
  base: string = '';
  main: Main;
  visibility: number = 0;
  wind: Wind;
  clouds: Clouds;
  dt: number = 0;
  sys: Sys;
  timezone: number = 0;
  id: number = 0;
  name: string = '';
  cod: number = 0;

  constructor(object: any) {
    this.coord = new Coord(object.coord);
    object.weather.forEach((element: any) => this.weather.push(new Weather(element)))
    this.base = object.base;
    this.main = new Main(object.main);
    this.visibility = object.visibility;
    this.wind = new Wind(object.wind)
    this.clouds = new Clouds(object.clouds)
    this.dt = object.dt;
    this.sys = new Sys(object.sys);
    this.timezone = object.timezone;
    this.name = object.name;
    this.cod = object.cod;
  }
}
