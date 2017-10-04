import { Frog } from './frog';

const canvas : any = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const frog = new Frog(ctx, canvas);

document.addEventListener('keydown', e => frog.move(e.keyCode));
