import {Injectable} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpHeadersService {

  headers = this.getHeader()

  constructor() {
  }

  getHeader(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', '*');
    headers.append('Access-Control-Allow-Methods', '*');

    return headers
  }
}
