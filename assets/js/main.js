// Navbar scroll class
$(window).scroll(function () {
  if ($(this).scrollTop() > 46) {
    $(".header-fixed").addClass("header-fixed--scrolled");
  } else {
    $(".header-fixed").removeClass("header-fixed--scrolled");
  }
});

//  Navbar overlay
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".navbar-nav .dropdown")
    .forEach(function (everydropdown) {
      everydropdown.addEventListener("shown.bs.dropdown", function () {
        el_overlay = document.createElement("span");
        el_overlay.className = "navbar-nav-overlay";
        document.body.appendChild(el_overlay);
      });

      everydropdown.addEventListener("hide.bs.dropdown", function () {
        document.body.removeChild(
          document.querySelector(".navbar-nav-overlay")
        );
      });
    });
});
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".navbar-search.dropdown")
    .forEach(function (everydropdown) {
      everydropdown.addEventListener("shown.bs.dropdown", function () {
        el_overlay = document.createElement("span");
        el_overlay.className = "navbar-search-overlay";
        document.body.appendChild(el_overlay);
      });

      everydropdown.addEventListener("hide.bs.dropdown", function () {
        document.body.removeChild(
          document.querySelector(".navbar-search-overlay")
        );
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

// review-slider2
const review2 = new Swiper(".review-slider2", {
  speed: 600,
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// country-slider
const country = new Swiper(".country-slider", {
  speed: 600,
  slidesPerView: 1,
  spaceBetween: 4,
  // centeredSlides: true,
  // loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    478: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
      // spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      // spaceBetween: 24,
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

// package-slider
const packageSlider = new Swiper(".package-slider", {
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

// package-image-slider
const packageImageThumb = new Swiper(".package-image-thumb", {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  direction: "horizontal",
  breakpoints: {
    768: {
      direction: "vertical",
      slidesPerView: 5,
      centeredSlides: false,
    },
  },
});
const packageImageMain = new Swiper(".package-image-main", {
  spaceBetween: 10,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: packageImageThumb,
  },
});

// Fancybox
Fancybox.bind("[data-fancybox]", {
  dragToClose: false,
});

// PhotoSubmission
class PhotoSubmission {
  constructor() {
    const inputs = document.querySelectorAll(".js-avatar-upload__input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("change", this.uploadImage);
    }
  }
  uploadImage(e) {
    const fileInput = e.target;
    const uploadBtn = fileInput.parentNode;
    const deleteBtn = uploadBtn.childNodes[7];
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadBtn.setAttribute(
        "style",
        `background-image: url('${e.target.result}');`
      );
      uploadBtn.classList.add("avatar-upload--image");
      fileInput.setAttribute("style", "display:none;");
    };
    reader.readAsDataURL(e.target.files[0]);
    deleteBtn.addEventListener("click", () => {
      uploadBtn.removeAttribute("style");
      uploadBtn.classList.remove("avatar-upload--image");
      setTimeout(() => {
        fileInput.removeAttribute("style", "display:none;");
      }, 200);
    });
  }
}
new PhotoSubmission();


// Dropzone
$("#add-photo").on("click", function () {
  $("#gallery-upload").slideToggle(100);
});
// var galleryAlert = $("#gallery-alert");
// var galleryFiles = $("#gallery-files");
// var galleryImages = $("#gallery-images");
var galleryAlert = document.querySelector("#gallery-alert");
var galleryFiles = document.querySelector("#gallery-files");
var galleryImages = document.querySelector("#gallery-upload");
if (galleryImages) {
  var galleryDropzone = new Dropzone("#gallery-upload", {
    url: "/assets/img/review/thumbs",
    paramName: "thumbs",
    maxFiles: 4,
    maxFilesize: 1,
    acceptedFiles: ".jpg, .png",
    dictFileTooBig: "Максимальный размер файла - 1 Мб",
    dictMaxFilesExceeded: "Вы не можете загружать больше файлов",
    dictInvalidFileType: "К загрузке разрешены разрешения: .jpg, .png",
    dictRemoveFile:
      '<svg class="icon"><use href="./assets/img/svgsprite/sprite.symbol.svg#delete"></use></svg>',
    dictCancelUpload:
      '<svg class="icon"><use href="./assets/img/svgsprite/sprite.symbol.svg#delete"></use></svg>',
    addRemoveLinks: true,
    parallelUploads: 1,
    // error: function(file, errorMessage){
    //   $('.gallery-alert').remove();
    //   $('#gallery-alert').append('<div class="gallery-alert text-danger mb-3 w-100"><svg class="icon"><use href="./assets/img/svgsprite/sprite.symbol.svg#error-warning"></use></svg> '+ errorMessage +'</div>');
    //   galleryDropzone.removeFile(file);
    // },
    success: function (file, response) {
      console.log(file);
      console.log(response);
    },
  });
}

// Range Slider
const targets = document.querySelectorAll(".js-price-rangeSlider");

targets.forEach((el) => {
  const slider = el.querySelector(".js-slider");

  noUiSlider.create(slider, {
    start: [0, 2000],
    step: 100,
    connect: true,
    range: {
      min: 0,
      max: 2000,
    },
    format: {
      from: function (value) {
        return parseInt(value);
      },
      to: function (value) {
        return parseInt(value);
      },
    },
  });

  const snapValues = [
    el.querySelector(".js-price-min"),
    el.querySelector(".js-price-max"),
  ];

  slider.noUiSlider.on("update", function (values, handle) {
    snapValues[handle].innerHTML = values[handle];
  });
});
