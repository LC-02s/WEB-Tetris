/* eslint-disable import/extensions */
/* eslint-disable node/no-unsupported-features/es-syntax */

// randomizer: rule of 7-bag system
export default function getRandomNum(totalIndex) {
  const randomIndexArray = [];
  while (randomIndexArray.length < totalIndex) {
    const randomNum = Math.floor(Math.random() * totalIndex);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum);
    }
  }
  return randomIndexArray;
}
