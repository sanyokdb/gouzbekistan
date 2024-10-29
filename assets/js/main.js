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
