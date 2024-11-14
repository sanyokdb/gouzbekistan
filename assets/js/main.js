// Navbar scroll class
$(window).scroll(function () {
  if ($(this).scrollTop() > 46) {
    $(".header-fixed").addClass("header-fixed--scrolled");
  } else {
    $(".header-fixed").removeClass("header-fixed--scrolled");
  }
});

//  Navbar overlay
document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('.navbar-nav .dropdown').forEach(function(everydropdown){
    everydropdown.addEventListener('shown.bs.dropdown', function () {
        el_overlay = document.createElement('span');
        el_overlay.className = 'navbar-nav-overlay';
        document.body.appendChild(el_overlay)
    });

    everydropdown.addEventListener('hide.bs.dropdown', function () {
      document.body.removeChild(document.querySelector('.navbar-nav-overlay'));
    });
  });

});
document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('.navbar-search.dropdown').forEach(function(everydropdown){
    everydropdown.addEventListener('shown.bs.dropdown', function () {
        el_overlay = document.createElement('span');
        el_overlay.className = 'navbar-search-overlay';
        document.body.appendChild(el_overlay)
    });

    everydropdown.addEventListener('hide.bs.dropdown', function () {
      document.body.removeChild(document.querySelector('.navbar-search-overlay'));
    });
  });

});

// Hero Slider
const heroSlider = new Swiper("#hero-slider", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 4500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// scrollUp
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("#scrollUp").fadeIn();
  } else {
    $("#scrollUp").fadeOut();
  }
});
$("#scrollUp").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false;
});

// review-slider
const review = new Swiper(".review-slider", {
  speed: 600,
  autoHeight: true,
  // loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
  },
});

// post-slider
const postSlider = new Swiper(".post-slider", {
  slidesPerView: 1,
  speed: 600,
  autoHeight: true,
  // loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

// Fancybox
Fancybox.bind('[data-fancybox]', {
  dragToClose: false,
});