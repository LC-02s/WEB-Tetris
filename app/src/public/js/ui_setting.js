/* eslint-disable import/extensions */
/* eslint-disable node/no-unsupported-features/es-syntax */

export const defaultSetting = {
  controls: {
    moveRight: ['ArrowRight', "'"],
    moveLeft: ['ArrowLeft', 'l'],
    rotateRight: ['ArrowUp', 'p'],
    rotateLeft: ['z'],
    softDrop: ['ArrowDown', ';'],
    hardDrop: ['Space'],
    hold: ['c'],
  },
  effectVolume: 100,
  DAS: 170,
  ARR: 30,
};

const targetArr = ['effectVolume', 'DAS', 'ARR'];

export function saveSetting(state) {
  if (state) {
    // update
    targetArr.forEach((target) => {
      const targetValue = document.getElementById(target).dataset.settingValue;
      defaultSetting[target] = Number(targetValue);
    });
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(defaultSetting)) {
    console.log(`${key}: ${value}`);
    if (key === 'controls') {
      window.localStorage.setItem(key, JSON.stringify(value));
    } else {
      window.localStorage.setItem(key, Number(value));
    }
  }
}

export function printSetting() {
  if (window.localStorage.length !== 0) {
    targetArr.forEach((target) => {
      const targetData = Number(window.localStorage.getItem(target));
      const targetEl = document.getElementById(target);
      const targetTextEl = targetEl.querySelector('span');
      const targetUnit = targetEl.dataset.settingUnit;

      targetEl.dataset.settingValue = targetData;
      targetTextEl.textContent = `${targetData + targetUnit}`;
    });
  } else saveSetting(0);
}
