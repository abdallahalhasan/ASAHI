// ööööö

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}


let nums = document.querySelectorAll(".awesome-boxese  .num");
let section = document.getElementById("count");
let started = false;  




let card_1 = document.getElementById('card-one');
let card_2 = document.getElementById('card-tow');
let card_3 = document.getElementById('card-three');
let section_in  = document.querySelector('.food-slider'); 



let box1 = document.getElementById('box-one');
let box2 = document.getElementById('box-tow');
let box3 = document.getElementById('box-three');
let boxses  = document.querySelector('.boxses'); 



window.onscroll = function () {
  if (window.scrollY >= section.offsetTop -500) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }


  if(window.scrollY >= section_in.offsetTop -100){
    card_1.style.right = card_1.dataset.right;
    card_2.style.opacity = card_2.dataset.opacity;
    card_3.style.right = card_3.dataset.right;

  }

  if(window.scrollY >= boxses.offsetTop - 400){
    boxses.style.opacity=boxses.dataset.opacity;

      box1.style.right=box1.dataset.right;
      box2.style.opacity=box2.dataset.opacity;
      box3.style.left=box3.dataset.left;

  }


};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}



let slid1 = document.getElementById("slide-one")
let slid2 = document.getElementById("slide-tow")
let slid3 = document.getElementById("slide-three")
 

let section_slide = document.getElementById('slideshow-container');


if (window.scrollY >= section_slide.offsetTop - 50) {

    slid1.style.opacity = slid1.dataset.opacity;
    slid2.style.opacity = slid2.dataset.opacity;
    slid3.style.opacity = slid3.dataset.opacity;
}




jQuery(document).ready(function($){
  var isLateralNavAnimating = false;
  
  //open/close lateral navigation
  $('.cd-nav-trigger').on('click', function(event){
    event.preventDefault();
    //stop if nav animation is running 
    if( !isLateralNavAnimating ) {
      if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
      
      $('body').toggleClass('navigation-is-open');
      $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        //animation is over
        isLateralNavAnimating = false;
      });
    }
  });
});


// incremt right 



