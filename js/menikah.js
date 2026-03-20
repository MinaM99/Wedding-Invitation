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
  // List of hero slider images
  const sliderImages = [
    'image/photos/1.webp',
    'image/photos/2.webp',
    'image/photos/3.webp',
    'image/photos/4.webp',
    'image/photos/5.webp',
    'image/photos/6.webp'
  ];

  let loadedImages = 0;
  const totalImages = sliderImages.length;

  function preloadImages() {
    sliderImages.forEach(src => {
      const img = new Image();
      img.onload = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          hidePreloader();
        }
      };
      img.onerror = () => {
        setTimeout(hidePreloader, 5000);
      };
      img.src = src;
    });
  }

  function initHeroSlider() {
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
  }

  function hidePreloader() {
    $(".preloader-wrapper").fadeOut(500);
    $("body").removeClass("preloader-site");
    initHeroSlider();
  }

  preloadImages();
  // Fallback timeout
  setTimeout(hidePreloader, 10000);
});
$(window).load(function() {
  var Body = $("body");
  Body.addClass("preloader-site");
});
