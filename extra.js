/carousel
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');


const slideWidth = slides[0].getBoundingClientRect().width;

//arrange slides next to eachother
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

// when I click right, move slides to the right
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.currentSlide');
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;
  //move to the next slide
})

// when I click left, move slides to the left

//Video on hover
// $('.element.video, .slide.video').hover(function () {
//   if ($(this).find('.video-js').length) {
//     _V_($(this).find('.video-js')[0]).ready(function () {
//       var myPlayer = this;
//       myPlayer.posterImage.hide();
//       myPlayer.play();
//     });
//   }
//
// }, function () {
//   if ($(this).find('.video-js').length) {
//     _V_($(this).find('.video-js')[0]).ready(function () {
//       var myPlayer = this;
//       myPlayer.pause().currentTime(0);
//       myPlayer.posterImage.show();
//     });
//   }
// });
