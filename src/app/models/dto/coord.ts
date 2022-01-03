export class Coord {
  lat: number = 0.0;
  lon: number = 0.0;

  constructor(object: any) {
    this.setValues(object.lat, object.lon)
  }

  setValues(lat: number, lon: number) {
    this.lat = lat;
    this.lon = lon;
  }

}
