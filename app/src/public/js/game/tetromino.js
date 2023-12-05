/* eslint-disable import/extensions */
/* eslint-disable node/no-unsupported-features/es-syntax */

export default class Tetromino {
  constructor(name, blockImg, previewImg, templete) {
    this.name = name;
    this.blockImg = blockImg;
    this.previewImg = previewImg;
    this.templete = templete;
  }
}
