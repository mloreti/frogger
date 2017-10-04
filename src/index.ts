import { Ball } from './ball';

const canvas : any = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const ball = new Ball(ctx, canvas);

document.addEventListener('keydown', e => ball.move(e.keyCode));
