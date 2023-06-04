import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';



/* Video block */
// лучше дождаться, когда страница загрузится и только тогда выполнять скрипты и вешать обработчики
window.onload = () => {
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
    // нужно вешать обработчик событий на сами кнопки, а не на их контейнер
    // без использования JQuery это нужно делать в цикле
    for (const btn of toBookTabsBtns) {
      btn.addEventListener('click', (e) => {
        // отменяем стандартное поведение кнопки при клике
        e.preventDefault();

        // Проверяем, если кликнули на кнопку, то берем target, если кликнули на дочерний элемент кнопки,
        // то ищем родителя с классом to-book-tabs-nav__btn, то есть кнопку и возвращаем ее. Так у нас всегда по клику будет получена кнопка
        const target = e.target.classList.contains('to-book-tabs-nav__btn') ? e.target : e.target.closest('.to-book-tabs-nav__btn');

        const path = target.dataset.path;

        toBookTabsBtns.forEach(el => { el.classList.remove('to-book-tabs-nav__btn--active') });
        target.classList.add('to-book-tabs-nav__btn--active');

        toBookTabsItems.forEach(el => {
          el.classList.remove('to-book-tabs__item--visible');
        });

        document.querySelectorAll(`[data-target="${path}"]`).forEach(el => {
          el.closest('.to-book-tabs__item').classList.add('to-book-tabs__item--visible');
        });
      });
    }
  }

}

