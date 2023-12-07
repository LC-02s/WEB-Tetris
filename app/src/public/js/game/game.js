/* eslint-disable import/extensions */
/* eslint-disable node/no-unsupported-features/es-syntax */

import getRandomNum from './loop/logic/randomizer.js';
import { shapes } from './variables.js';

const canvas = document.getElementById('game-field');
const ctx = canvas.getContext('2d');
const squareSizeX = canvas.width / 10;
const squareSizeY = canvas.height / 20;

console.log(ctx, squareSizeX, squareSizeY);

console.log(getRandomNum(shapes.length));
console.log(getRandomNum(shapes.length));
console.log(getRandomNum(shapes.length));
