/* eslint-disable node/no-unsupported-features/es-syntax */

const uiMenuSoundAsset = new Audio('../sound/asset/ui_menu_navigate.wav');
const uiEnterSoundAsset = new Audio('../sound/asset/ui_enter.wav');
const uiBackspaceSoundAsset = new Audio('../sound/asset/ui_backspace.wav');

export default function playSoundEffect(soundType) {
  switch (soundType) {
    case 0:
      uiMenuSoundAsset.currentTime = 0;
      uiMenuSoundAsset.play();
      break;
    case 1:
      uiEnterSoundAsset.currentTime = 0;
      uiEnterSoundAsset.play();
      break;
    case 2:
      uiBackspaceSoundAsset.currentTime = 0;
      uiBackspaceSoundAsset.play();
      break;
    default:
      console.log(soundType);
      break;
  }
}