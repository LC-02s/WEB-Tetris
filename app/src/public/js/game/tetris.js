/* eslint-disable import/extensions */
/* eslint-disable node/no-unsupported-features/es-syntax */

import assetList from '../ui_preloader.js';
import Tetromino from './tetromino.js';

const blockSize = 36;
const gameSpeed = 5;
const canvas = document.getElementById('marathon-mode');
const ctx = canvas.getContext('2d');
const squareCountX = canvas.width / blockSize;
const squareCountY = canvas.height / blockSize;

const shapes = [
  new Tetromino('Z', assetList[0], assetList[8], [
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 1],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 1],
      [0, 0, 1, 1],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
  ]),
  new Tetromino('L', assetList[1], assetList[9], [
    [
      [0, 0, 0, 1],
      [0, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 1],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 1, 1],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
  ]),
  new Tetromino('O', assetList[2], assetList[10], [
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
  ]),
  new Tetromino('S', assetList[3], assetList[11], [
    [
      [0, 0, 0, 0],
      [0, 0, 1, 1],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 1, 0],
      [0, 0, 1, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 0],
    ],
  ]),
  new Tetromino('I', assetList[4], assetList[12], [
    [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
    ],
    [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ]),
  new Tetromino('J', assetList[5], assetList[13], [
    [
      [0, 1, 0, 0],
      [0, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 1, 1],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 1, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
  ]),
  new Tetromino('T', assetList[6], assetList[14], [
    [
      [0, 0, 1, 0],
      [0, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 1, 0],
      [0, 0, 1, 1],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 1, 1],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
  ]),
];

console.log(shapes, assetList);
console.log(ctx, gameSpeed, squareCountX, squareCountY);
