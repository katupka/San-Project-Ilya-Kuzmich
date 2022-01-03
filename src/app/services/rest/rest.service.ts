import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HostAddressService} from '../host-address/host-address.service';
import {HttpHeadersService} from '../http-headers/http-headers.service';
import {map} from 'rxjs/operators';
import {WeatherResponse} from "../../models/dto/weather-response";

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient, private hostAddress: HostAddressService,
              private httpHeaders: HttpHeadersService) {
  }

  getWeather(city: String): Observable<WeatherResponse> {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', '*');
    headers.append('Access-Control-Allow-Methods', '*');


    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=6890862a72fc7aabfe2222f2f2b1d4b0&lang=pl&units=metric', {
      headers
    }).pipe(
      map((data) => {
        return new WeatherResponse(data);
      }));
  }
}
