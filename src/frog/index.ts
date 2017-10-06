export class Frog {
  x : number;
  y : number;
  velocity : number;
  radius : number;
  color : string;

  constructor(private ctx : CanvasRenderingContext2D, private canvas : HTMLCanvasElement) {
    this.velocity = 50;
    this.radius = 25;
    this.x = this.canvas.width / 2 - this.radius;
    this.y = this.canvas.height - this.radius;
    this.color = 'blue';
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  move(keyCode : number) {
    switch (keyCode) {
      case 37: // left
        if (this.x - this.radius > 0) { this.x -= this.velocity; }
        break;
      case 38: // up
        if (this.y - this.radius > 0) { this.y -= this.velocity; }
        break;
      case 39: // right
        if (this.x + this.radius < this.canvas.width) { this.x += this.velocity; }
        break;
      case 40: // down
        if (this.y + this.radius < this.canvas.height) { this.y += this.velocity; }
        break;
    }
  }

  reset() {
    this.x = this.canvas.width / 2 - this.radius;
    this.y = this.canvas.height - this.radius;
  }
}
