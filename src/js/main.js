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
