const heroSlider = new Swiper('#hero-slider', {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 4500,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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