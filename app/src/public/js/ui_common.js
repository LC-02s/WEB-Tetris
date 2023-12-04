/* eslint-disable import/extensions */
/* eslint-disable node/no-unsupported-features/es-syntax */

import playSoundEffect from "./ui_sound.js";

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