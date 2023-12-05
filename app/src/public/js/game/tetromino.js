/* eslint-disable import/extensions */
/* eslint-disable node/no-unsupported-features/es-syntax */

export default class Tetromino {
  constructor(name, blockImg, ghostImg, templete) {
    this.name = name;
    this.blockImg = blockImg;
    this.ghostImg = ghostImg;
    this.templete = templete;
  }
}
