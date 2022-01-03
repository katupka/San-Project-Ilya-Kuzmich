export class Sys {
  type = 0;
  id = 0;
  country = '';
  sunrise = 0;
  sunset = 0;

  constructor(object: any) {
    this.type = object.type;
    this.id = object.id;
    this.country = object.country;
    this.sunrise = object.sunrise;
    this.sunset = object.sunset;
  }
}
