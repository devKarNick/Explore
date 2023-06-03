import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';



/* Video block */

const videoBlock = document.querySelector('.video-block');

if (videoBlock) {
  const video = videoBlock.querySelector('video');
  const playBtn = videoBlock.querySelector('.video-block__play');

  playBtn.addEventListener('click', () => {
    videoBlock.classList.add('video-block--played');
    video.play();
    video.controls = true;
    playBtn.classList.add('video-block__play--played');
  });

  video.onpause = function () {
    videoBlock.classList.remove('video-block--played');
    video.contains = false;
    playBtn.classList.remove('video-block__play--played')
  };
}

/* Tabs */


const toBookTabsNav = document.querySelector('.to-book-tabs-nav');
const toBookTabsBtns = document.querySelectorAll('.to-book-tabs-nav__btn');
const toBookTabsItems = document.querySelectorAll('.to-book-tabs__item');
const toBookTabsItemsVisible = document.querySelectorAll('.to-book-tabs__item--visible');



if (toBookTabsNav) {

  toBookTabsNav.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('to-book-tabs-nav__btn')) {
      const path = target.dataset.path;

      toBookTabsBtns.forEach(el => { el.classList.remove('to-book-tabs-nav__btn--active') });
      target.classList.add('to-book-tabs-nav__btn--active');

      toBookTabsItems.forEach(el => {
        el.classList.remove('to-book-tabs__item--visible');
      });

      document.querySelectorAll(`[data-target="${path}"]`).forEach(el => {
        el.closest('.to-book-tabs__item').classList.add('to-book-tabs__item--visible');
      });

    }
  });
}
