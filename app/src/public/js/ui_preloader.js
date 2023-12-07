/* eslint-disable import/extensions */
/* eslint-disable node/no-unsupported-features/es-syntax */

const preloadAssetArr = [
  '../img/asset/asset_block_red.svg',
  '../img/asset/asset_block_orange.svg',
  '../img/asset/asset_block_yellow.svg',
  '../img/asset/asset_block_green.svg',
  '../img/asset/asset_block_cyan.svg',
  '../img/asset/asset_block_blue.svg',
  '../img/asset/asset_block_purple.svg',
  '../img/asset/asset_block_gray.svg',
  '../img/asset/asset_ghost_red.svg',
  '../img/asset/asset_ghost_orange.svg',
  '../img/asset/asset_ghost_yellow.svg',
  '../img/asset/asset_ghost_green.svg',
  '../img/asset/asset_ghost_cyan.svg',
  '../img/asset/asset_ghost_blue.svg',
  '../img/asset/asset_ghost_purple.svg',
  '../img/asset/asset_ghost_gray.svg',
];

function preloadAsset(assetArr) {
  const setAsset = [];
  const progressEl = document.getElementById('preload-progress');
  const totalProgressNum = assetArr.length;
  let countProgressNum = 0;
  let loadComplete = true;

  function updateProgressBar(index, state) {
    const progress = Math.floor((countProgressNum / totalProgressNum) * 100);
    const progressCipher = String(progress).padStart(2, '0');
    setTimeout(() => {
      if (state) {
        if (loadComplete) {
          // complete
          progressEl.innerText = 'Press To Start Game';
          progressEl.classList.add('loaded');
          console.log(`100%...loaded`);
        } else {
          // error handling
          progressEl.innerText = 'Error Please Reload';
          progressEl.classList.add('error');
          console.log('Image not loaded');
        }
      } else {
        // progress
        progressEl.innerText = `Loading... ${progressCipher}%`;
        console.log(`${progressCipher}%`);
      }
    }, 50 * index);
  }

  for (let i = 0; i < totalProgressNum; i += 1) {
    const [, assetName] = assetArr[i].match(/asset_([^/]+)\.svg$/);
    setAsset[i] = new Image();
    setAsset[i].id = assetName;
    setAsset[i].src = assetArr[i];

    countProgressNum += 1;
    updateProgressBar(i, countProgressNum === totalProgressNum ? 1 : 0);

    /* eslint-disable-next-line */
    setAsset[i].onerror = () => {
      loadComplete = false;
    };
  }

  return setAsset;
}

const assetList = preloadAsset(preloadAssetArr);

export default assetList;
