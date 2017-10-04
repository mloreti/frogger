export class Ball {
  x : number;
  y : number;
  velocity : number;
  radius : number;
  color : string;
  constructor(private ctx : CanvasRenderingContext2D, private canvas : HTMLCanvasElement) {
    this.x = 100;
    this.y = 100;
    this.velocity = 25;
    this.radius = 25;
    this.color = 'blue';
    this.draw();
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
  move(keyCode : number) {
    switch (keyCode) {
      case 37: // left
        if (this.x - this.velocity > 0) { this.x -= this.velocity; }
        break;
      case 38: // up
        if (this.y - this.velocity > 0) { this.y -= this.velocity; }
        break;
      case 39: // right
        if (this.x + this.velocity < this.canvas.width) { this.x += this.velocity; }
        break;
      case 40: // down
        if (this.y + this.velocity < this.canvas.height) { this.y += this.velocity; }
        break;
    }
    this.draw();
  }
}
