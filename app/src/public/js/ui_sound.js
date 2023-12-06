/* eslint-disable node/no-unsupported-features/es-syntax */

const uiMenuSound = new Audio('../sound/asset/ui_menu_navigate.wav');
const uiEnterSound = new Audio('../sound/asset/ui_enter.wav');
const uiBackspaceSound = new Audio('../sound/asset/ui_backspace.wav');
const uiAdjustSound = new Audio('../sound/asset/ui_adjust.wav');

export default function playSoundEffect(soundType) {
  switch (soundType) {
    case 0:
      uiMenuSound.currentTime = 0;
      uiMenuSound.play();
      break;
    case 1:
      uiEnterSound.currentTime = 0;
      uiEnterSound.play();
      break;
    case 2:
      uiBackspaceSound.currentTime = 0;
      uiBackspaceSound.play();
      break;
    case 3:
      uiAdjustSound.currentTime = 0;
      uiAdjustSound.play();
      break;
    default:
      console.log(soundType);
      break;
  }
}
