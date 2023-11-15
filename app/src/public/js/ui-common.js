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

const introContainer = document.getElementById('intro-container');
const progressState = document.getElementById('preload-progress');
const menuContainer = document.getElementById('menu-container');
const settingContainer = document.getElementById('setting-container');
const gameContainer = document.getElementById('game-container');

function commonUiEvent(index, event) {
  const menuList = document.querySelectorAll('.menu-wrap__menuBox ul li');
  let selectedIndex = 0;

  function changeMenuArticle() {
    const selectedMenu = document.querySelector(
      '.menu-wrap__menuBox ul li.selected',
    );
    const { menuArticle } = selectedMenu.dataset;
    const menuArticleEl = document.querySelector('.menu-wrap__article');

    menuArticleEl.innerText = menuArticle;
  }

  switch (Number(index)) {
    case 0:
      if (progressState.classList.contains('loaded') && event.keyCode === 13) {
        introContainer.dataset.disabled = 0;
        menuContainer.dataset.disabled = 1;
      }
      break;
    case 1:
      for (let i = 0; i < menuList.length; i += 1) {
        if (menuList[i].classList.contains('selected')) {
          selectedIndex = i;
        }
      }
      if (event.keyCode === 13) {
        // enter
        const selectedItem = document.querySelector(
          '.menu-wrap__menuBox ul li.selected button',
        );
        console.log(selectedItem.id, selectedIndex);
        selectedItem.click();
      } else if (event.keyCode === 38) {
        // ArrowUp
        if (selectedIndex !== 0) {
          menuList[selectedIndex].classList.remove('selected');
          menuList[selectedIndex - 1].classList.add('selected');
          changeMenuArticle();
        }
      } else if (event.keyCode === 40) {
        // ArrowDown
        if (selectedIndex !== menuList.length - 1) {
          menuList[selectedIndex].classList.remove('selected');
          menuList[selectedIndex + 1].classList.add('selected');
          changeMenuArticle();
        }
      }
      break;
    case 2:
      if (event.keyCode === 8) {
        settingContainer.dataset.disabled = 0;
        menuContainer.dataset.disabled = 1;
      }
      break;
    case 3:
      if (event.keyCode === 8) {
        gameContainer.dataset.disabled = 0;
        menuContainer.dataset.disabled = 1;
      }
      break;
    default:
      console.log(index, event);
      break;
  }
}

document.addEventListener('keydown', (e) => {
  const activeContainer = document.querySelector("[data-disabled='1']");
  const { containerIndex } = activeContainer.dataset;

  commonUiEvent(containerIndex, e);
});

// menu button event
const settingPageBtn = document.getElementById('settingPageBtn');
const marathonModeBtn = document.getElementById('marathonModeBtn');
const vsAiModeBtn = document.getElementById('vsAiModeBtn');

settingPageBtn.addEventListener('click', () => {
  menuContainer.dataset.disabled = 0;
  settingContainer.dataset.disabled = 1;
});
marathonModeBtn.addEventListener('click', () => {
  menuContainer.dataset.disabled = 0;
  gameContainer.dataset.disabled = 1;
});
vsAiModeBtn.addEventListener('click', () => {
  menuContainer.dataset.disabled = 0;
  gameContainer.dataset.disabled = 1;
});
