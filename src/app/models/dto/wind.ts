export class Wind {
  speed = 0.0;
  deg = 0;

  constructor(object: any) {
    this.deg = object.deg;
    this.speed = object.speed;
  }
}
