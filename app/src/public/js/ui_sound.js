/* eslint-disable import/extensions */
/* eslint-disable node/no-unsupported-features/es-syntax */

const uiMenuSound = new Audio('../sound/asset/ui_menu_navigate.wav');
const uiEnterSound = new Audio('../sound/asset/ui_enter.wav');
const uiBackspaceSound = new Audio('../sound/asset/ui_backspace.wav');
const uiAdjustSound = new Audio('../sound/asset/ui_adjust.wav');

export default function playSoundEffect(soundType) {
  const soundVolume = Number(window.localStorage.getItem('effectVolume')) ?? 100;
  switch (soundType) {
    case 0:
      uiMenuSound.volume = parseFloat(soundVolume / 100);
      uiMenuSound.currentTime = 0;
      uiMenuSound.play();
      break;
    case 1:
      uiEnterSound.volume = parseFloat(soundVolume / 100);
      uiEnterSound.currentTime = 0;
      uiEnterSound.play();
      break;
    case 2:
      uiBackspaceSound.volume = parseFloat(soundVolume / 100);
      uiBackspaceSound.currentTime = 0;
      uiBackspaceSound.play();
      break;
    case 3:
      uiAdjustSound.volume = parseFloat(soundVolume / 100);
      uiAdjustSound.currentTime = 0;
      uiAdjustSound.play();
      break;
    default:
      console.log(soundType);
      break;
  }
}
