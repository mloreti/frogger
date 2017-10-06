export class Car {
  x: number;
  width: number;
  velocity: number;
  color: string;

  constructor(
    private ctx : CanvasRenderingContext2D,
    private canvas : HTMLCanvasElement,
    public y : number,
  ) {
    this.velocity = this.numberRange(30, 15);
    this.x = this.numberRange(0, this.canvas.width);
    this.width = 100;
    this.color = 'black';
  }

  numberRange(min : number, max : number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  move() {
    if (this.x + this.velocity > this.canvas.width + this.width) {
      this.x = 0;
    } else {
      this.x += this.velocity;
    }
    this.draw();
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, 100, 50);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
}
