// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
 






// AOS

AOS.init({
    // duration: 800,
    // easing: 'slide',
    once: true,

    offset:300,
        duration:800
});



// owl carousel

$(document).ready(function(){

    $('.client-slider-section').owlCarousel({
  
      margin: 20,
      items:3,
      loop: true,
      autoplay: true,
      nav:false,
      // navText:[ $('.owl-navigation.owl-nav-prev'),$('.owl-navigation.owl-nav-next')] ,
      autoplayTimeout: 2000,
      responsive: {
        0: {
          items: 2
      },
      540: {
          items: 2
      },
      750: {
          items: 3
      },
      1000: {
          items: 4
      }
        
      }
  
  
    });
  
  
  
    wow = new WOW();
    wow.init();
  
  
  });

