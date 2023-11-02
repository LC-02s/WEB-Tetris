'use-strict';

// intro
const preloadAssetArr = [
  '../img/asset/asset_block_blue.svg',
  '../img/asset/asset_block_cyan.svg',
  '../img/asset/asset_block_gray.svg',
  '../img/asset/asset_block_green.svg',
  '../img/asset/asset_block_orange.svg',
  '../img/asset/asset_block_purple.svg',
  '../img/asset/asset_block_red.svg',
  '../img/asset/asset_preview_blue.svg',
  '../img/asset/asset_preview_cyan.svg',
  '../img/asset/asset_preview_gray.svg',
  '../img/asset/asset_preview_green.svg',
  '../img/asset/asset_preview_orange.svg',
  '../img/asset/asset_preview_purple.svg',
  '../img/asset/asset_preview_red.svg',
];

function preloadAsset(assetArr) {
  const setAsset = [];
  const progressEl = document.getElementById('preload-progress');
  const totalProgressNum = assetArr.length;
  let countProgressNum = 0;

  function updateProgressBar() {
    const progress = Math.floor((countProgressNum / totalProgressNum) * 100);
    const progressCipher = String(progress).padStart(2, '0');
    progressEl.innerText = `Loading... ${progressCipher}%`;
    console.log(`${progressCipher}%`);
  }

  for (let i = 0; i < totalProgressNum; i += 1) {
    const [, assetName] = assetArr[i].match(/asset_([^/]+)\.svg$/);
    setAsset[i] = new Image();
    setAsset[i].id = assetName;
    setAsset[i].src = assetArr[i];

    /* eslint-disable-next-line */
    setAsset[i].onload = () => {
      countProgressNum += 1;
      if (countProgressNum === totalProgressNum) {
        progressEl.innerText = 'Press To Start Game';
        progressEl.classList.add('loaded');
      } else {
        updateProgressBar();
      }
    };
    setAsset[i].onerror = () => {
      progressEl.innerText = 'Error Please Reload';
      progressEl.classList.add('error');
      console.error('Image not loaded');
    };
  }

  return setAsset;
}

const assetList = preloadAsset(preloadAssetArr);

console.log(assetList);
