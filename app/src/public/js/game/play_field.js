/* eslint-disable import/extensions */
/* eslint-disable node/no-unsupported-features/es-syntax */

const canvas = document.getElementById('game-field');
const ctx = canvas.getContext('2d');
const squareSizeX = canvas.width / 10;
const squareSizeY = canvas.height / 20;

console.log(ctx, squareSizeX, squareSizeY);
