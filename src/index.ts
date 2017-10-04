const canvas : any = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const ball : { [index:string] : number | string | any } = {
  x: 100,
  y: 100,
  velocity: 25,
  radius: 25,
  color: 'blue',
  draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
  move(keyCode : number) {
    switch (keyCode) {
      case 37: // left
        if (this.x - this.velocity > 0) { this.x -= this.velocity; }
        break;
      case 38: // up
        if (this.y - this.velocity > 0) { this.y -= this.velocity; }
        break;
      case 39: // right
        if (this.x + this.velocity < canvas.width) { this.x += this.velocity; }
        break;
      case 40: // down
        if (this.y + this.velocity < canvas.height) { this.y += this.velocity; }
        break;
    }
    this.draw();
  },
};

document.addEventListener('keydown', e => ball.move(e.keyCode));

ball.draw();
