/* eslint-disable import/extensions */
/* eslint-disable node/no-unsupported-features/es-syntax */

import playSoundEffect from "./ui_sound.js";

// intro
const preloadAssetArr = [
  '../img/asset/asset_block_gray.svg',
  '../img/asset/asset_block_red.svg',
  '../img/asset/asset_block_orange.svg',
  '../img/asset/asset_block_yellow.svg',
  '../img/asset/asset_block_green.svg',
  '../img/asset/asset_block_cyan.svg',
  '../img/asset/asset_block_blue.svg',
  '../img/asset/asset_block_purple.svg',
  '../img/asset/asset_preview_gray.svg',
  '../img/asset/asset_preview_red.svg',
  '../img/asset/asset_preview_orange.svg',
  '../img/asset/asset_preview_yellow.svg',
  '../img/asset/asset_preview_green.svg',
  '../img/asset/asset_preview_cyan.svg',
  '../img/asset/asset_preview_blue.svg',
  '../img/asset/asset_preview_purple.svg',
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

// console.log(assetList);


const introContainer = document.getElementById('intro-container');
const progressState = document.getElementById('preload-progress');
const menuContainer = document.getElementById('menu-container');
const menuList = document.querySelectorAll('.menu-wrap__menuBox ul li');
const settingContainer = document.getElementById('setting-container');
const settingList = document.querySelectorAll(
  '.setting-wrap__menuBoxFrame ul li',
);
const gameContainer = document.getElementById('game-container');

function commonUiEvent(index, event) {
  let selectedIndex = 0;

  function changeArticle(containerIndex) {
    if (containerIndex === 0) {
      const selectedMenu = document.querySelector(
        '.menu-wrap__menuBox ul li.selected',
      );
      const { menuArticle } = selectedMenu.dataset;
      const menuArticleEl = document.querySelector('.menu-wrap__article');

      menuArticleEl.innerText = menuArticle;
    } else {
      const selectedMenu = document.querySelector(
        '.setting-wrap__menuBoxFrame ul li.selected',
      );
      const { settingArticle } = selectedMenu.dataset;
      const settingArticleEl = document.querySelector('.setting-wrap__article');

      settingArticleEl.innerText = settingArticle;
    }
  }

  switch (Number(index)) {
    case 0:
      // intro container
      if (progressState.classList.contains('loaded') && event.keyCode === 13) {
        introContainer.dataset.disabled = 0;
        menuContainer.dataset.disabled = 1;
        playSoundEffect(1);
      }
      break;
    case 1:
      // menu container
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
        playSoundEffect(1);
      } else if (event.keyCode === 38) {
        // ArrowUp
        playSoundEffect(0);
        if (selectedIndex !== 0) {
          menuList[selectedIndex].classList.remove('selected');
          menuList[selectedIndex - 1].classList.add('selected');
          changeArticle(0);
        }
      } else if (event.keyCode === 40) {
        // ArrowDown
        playSoundEffect(0);
        if (selectedIndex !== menuList.length - 1) {
          menuList[selectedIndex].classList.remove('selected');
          menuList[selectedIndex + 1].classList.add('selected');
          changeArticle(0);
        }
      }
      break;
    case 2:
      // setting container
      for (let i = 0; i < settingList.length; i += 1) {
        if (settingList[i].classList.contains('selected')) {
          selectedIndex = i;
        }
      }
      console.log(selectedIndex, event);
      if (event.keyCode === 8) {
        settingContainer.dataset.disabled = 0;
        menuContainer.dataset.disabled = 1;
        playSoundEffect(2);
      } else if (event.keyCode === 13) {
        // enter
        const selectedItem = document.querySelector(
          '.setting-wrap__menuBoxFrame ul li.selected button',
        );
        console.log(selectedItem.id, selectedIndex);
        selectedItem.click();
        playSoundEffect(1);
      } else if (event.keyCode === 38) {
        // ArrowUp
        playSoundEffect(0);
        if (selectedIndex !== 0) {
          settingList[selectedIndex].classList.remove('selected');
          settingList[selectedIndex - 1].classList.add('selected');
          settingList[selectedIndex - 1].scrollIntoView({
            behavior: 'instant',
            block: 'center',
          });
          changeArticle(1);
        }
      } else if (event.keyCode === 40) {
        // ArrowDown
        playSoundEffect(0);
        if (selectedIndex !== settingList.length - 1) {
          settingList[selectedIndex].classList.remove('selected');
          settingList[selectedIndex + 1].classList.add('selected');
          settingList[selectedIndex + 1].scrollIntoView({
            behavior: 'instant',
            block: 'center',
          });
          changeArticle(1);
        }
      }
      break;
    case 3:
      // game container
      if (event.keyCode === 8) {
        gameContainer.dataset.disabled = 0;
        menuContainer.dataset.disabled = 1;
        playSoundEffect(2);
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
  // menuContainer.dataset.disabled = 0;
  // gameContainer.dataset.disabled = 1;
});

export default {
  assetList
}