/* eslint-disable import/extensions */
/* eslint-disable node/no-unsupported-features/es-syntax */

import getRandomNum from './loop/logic/randomizer.js';
import { shapes } from './variables.js';

const canvas = document.getElementById('game-field');
const ctx = canvas.getContext('2d');
const squareSizeX = canvas.width / 10;
const squareSizeY = canvas.height / 20;

const exampleArr = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
  [6, 0, 1, 1, 4, 4, 0, 0, 0, 0],
  [6, 6, 6, 1, 1, 4, 2, 3, 3, 0],
  [5, 5, 5, 5, 2, 2, 2, 3, 3, 0],
];

setTimeout(() => {
  for (let i = 0; i < exampleArr.length; i += 1) {
    for (let j = 0; j < exampleArr[i].length; j += 1) {
      const blockType = exampleArr[i][j];
      if (blockType) {
        ctx.drawImage(shapes[blockType - 1].blockImg, j * squareSizeX, i * squareSizeY, squareSizeX, squareSizeY);
      }
    }
  }
}, 2000);

console.log(exampleArr);

console.log(getRandomNum(shapes.length), getRandomNum(shapes.length), getRandomNum(shapes.length));
