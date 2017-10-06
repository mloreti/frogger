import { Frog } from '../frog';
import { Car } from '../car';

export class Game {
  canvas: any;
  ctx: any;
  frog: Frog;
  cars: Car[];
  interval: any;
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.frog = new Frog(this.ctx, this.canvas);
    this.cars = [];
    this.drawFrog();
    this.setUpCars();
    this.detectCollision();
  }

  setUpCars() {
    this.cars = [];
    let i;
    for (i = 0; i < 4; i += 1) {
      this.cars.push(new Car(this.ctx, this.canvas, (i + 1) * 50));
      this.cars.push(new Car(this.ctx, this.canvas, (i + 1) * 50));
    }
    this.startCars();
  }

  startCars() {
    this.interval = setInterval(() => this.render(), 60);
  }

  detectCollision() {
    this.cars.forEach((car) => {
      if (
        this.frog.x >= car.x &&
        this.frog.x <= car.x + car.width &&
        this.frog.y - this.frog.radius === car.y
      ) {
        alert('Game over');
        this.frog.reset();
      }
    });
  }

  detectWinner() {
    if (this.frog.y === this.frog.radius) {
      this.frog.draw();
      alert('You win');
      this.frog.reset();
    }
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawCars();
    this.frog.draw();
    this.detectCollision();
    this.detectWinner();
  }

  drawCars() {
    this.cars.forEach((car) => {
      car.move();
    });
  }

  drawFrog() {
    document.addEventListener('keydown', (e) => {
      this.frog.move(e.keyCode);
    });
  }

  stopCars() {
    window.clearInterval(this.interval);
  }
}
