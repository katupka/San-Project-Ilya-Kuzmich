import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HostAddressService {

  constructor() {
  }

  getHostAddress(): string {
    return environment.production ? '' : 'https://localhost:3000/';
  }
}