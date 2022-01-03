export class Main {
    temp = 0.0;
    feelsLike = 0.0;
    tempMin = 0.0;
    tempMax = 0.0;
    pressure = 0;
    humidity = 0;

    constructor(object: any) {
      this.setValues(object.temp, object.feels_like, object.temp_min, object.temp_max, object.pressure, object.humidity)

    }

    setValues(temp: number, feelsLike: number, tempMin: number, tempMax: number, pressure: number, humidity: number) {
      this.temp = temp;
      this.feelsLike = feelsLike;
      this.tempMin = tempMin;
      this.tempMax = tempMax;
      this.pressure = pressure;
      this.humidity = humidity;
    }
}
