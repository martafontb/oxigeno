//quicklink
window.addEventListener('load', () =>{
  quicklink.listen();
});

//loader
setTimeout(function() {
document.querySelector("div.loader").classList.add("hidden")
}, 5000)

//custom cursor
let cursor = document.querySelector('div.custom-cursor');
let body = document.querySelector('body')
let els = document.querySelectorAll('div.el');

body.addEventListener('mousemove',e=> moveHandler(e))

const moveHandler = (e)=> {
  cursor.style.left = e.pageX + "px"
  cursor.style.top = e.pageY + "px"
}


els.forEach(el=> el.addEventListener('mouseover', ()=>{
  cursor.classList.add('cursor-grow')
  cursor.innerHTML = "View"
}))

els.forEach(el=> el.addEventListener('mouseleave', ()=>{
  cursor.classList.remove('cursor-grow')
  cursor.innerHTML = " "
}))


//Menu toggle
const menuToggle = document.querySelector('a.menu-toggle')
const menuToggleText = menuToggle.querySelector('span')

menuToggle.addEventListener('click', function() {
  body.classList.toggle('nav-open')

  if(body.classList.contains('nav-open')){
    menuToggleText.innerHTML = "Close"
  } else {
    menuToggleText.innerHTML = "Menu"
  }

})


//Profile-info toggle

const infoToggle = document.querySelector('h2.info-toggle')
document.querySelector(".expander").addEventListener("click", animateIt);

const tl = gsap.timeline();
tl.from(".content",{
  height: 0,
  ease:"power3.inOut"
});
tl.reversed(true);

function animateIt() {
  tl.reversed(!tl.reversed())
    body.classList.toggle('profile-open')

    if(body.classList.contains('profile-open')){
      infoToggle.innerHTML = "- info"
    } else {
      infoToggle.innerHTML = "+ info"
    }
  ;
}


//go to top

// Selecting a button by its class
const buttonToTop = document.querySelector('.button-to-top');

// Scrolling function
const goToTop = () => {
  scrollTo(top);
}

// Executing scrolling function on click
buttonToTop.addEventListener('click', goToTop);



//video hover
const videos = document.querySelectorAll('video')

videos.forEach(video => {
  video.addEventListener("mouseover", function() {
    this.play()
  })

  video.addEventListener("mouseout", function() {
    this.pause()
  })

  video.addEventListener("touchstart", function() {
    this.play()
  })

  video.addEventListener("touchend", function() {
    this.pause()
  })
})


//Swiper
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  speed: 400,
  paceBetween: 100,
  slidesPerView: 1,
  centeredSlides: true,
  direction: 'horizontal',
  loop: true,
  lazy: true,

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
})

// video full screen


//form



// aos
AOS.init();
