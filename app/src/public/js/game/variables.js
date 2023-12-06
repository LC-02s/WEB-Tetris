/* eslint-disable import/extensions */
/* eslint-disable node/no-unsupported-features/es-syntax */

import assetList from '../ui_preloader.js';
import Tetromino from './tetromino.js';

export const shapes = [
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

export const scoreTable = {
  erase1: 100,
  erase2: 300,
  erase3: 500,
  erase4: 800,
  tspin0: 400,
  tspin1: 700, // These add to the regular erase points
  tspin2: 900,
  tspin3: 1100,
  tspin4: 1200,
  tmini: 100,
  softDrop: 1,
  hardDrop: 2,
  updateSoftDropImmediately: true,
  hasSpins: true,
  hasCombo: true,
  levelAdditive: 0,
  levelMultiplied: [
    'erase1',
    'erase2',
    'erase3',
    'erase4',
    'tspin0',
    'tspin1',
    'tspin2',
    'tspin3',
    'tspin4',
    'tmini',
    'combo',
  ],
  b2bMultiplier: 1.5,
  b2bMultiplied: ['erase1', 'erase2', 'erase3', 'erase4', 'tspin1', 'tspin2', 'tspin3', 'tspin4', 'tmini'],
  combo: 50,
};

console.log(shapes, assetList);
