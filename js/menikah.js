// Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const toTop = document.getElementById("toTop");
  if (toTop && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
    toTop.style.display = "block";
  } else if (toTop) {
    toTop.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Preloader
$(document).ready(function($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");

  // Initialize Hero Background Slider
  if (typeof Swiper !== 'undefined') {
    const heroSlider = new Swiper('.hero-slider', {
      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      speed: 1000,
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: '.hero-slider .swiper-pagination',
        clickable: true,
      },
    });
  }
});
$(window).load(function() {
  var Body = $("body");
  Body.addClass("preloader-site");
});
