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

// Smooth Anchor Scrolling - Fixed
$(document).on("click", 'a[href^="#"]', function(event) {
  // Skip RSVP toggle button
  if (this.id === 'rsvp-toggle') {
    return;
  }
  
  event.preventDefault();
  var href = $(this).attr("href");
  var $target = $(href);
  
  if ($target.length) {
    $("html, body").stop().animate({
      scrollTop: $target.offset().top - 50
    }, 500);
  }
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

// RSVP Form Functionality - Pure Vanilla JS
function initRSVP() {
  const toggleBtn = document.getElementById('rsvp-toggle');
  const form = document.getElementById('rsvp-form');
  const submitForm = document.getElementById('rsvp-form-submit');
  
  console.log('RSVP Init - Button:', toggleBtn, 'Form:', form);
  
  if (toggleBtn && form) {
    toggleBtn.addEventListener('click', function(e) {
      console.log('RSVP button clicked');
      e.preventDefault();
      e.stopPropagation();
      
      const isHidden = form.classList.contains('hidden');
      console.log('Form is hidden:', isHidden);
      
      if (isHidden) {
        form.classList.remove('hidden');
        toggleBtn.textContent = 'Close';
      } else {
        form.classList.add('hidden');
        toggleBtn.textContent = 'RSVP';
      }
      
      return false;
    });
  }
  
  if (submitForm) {
    submitForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const attendance = document.querySelector('input[name="attendance"]:checked');
      const firstName = document.querySelector('input[name="firstName"]');
      const lastName = document.querySelector('input[name="lastName"]');
      
      if (!attendance || !firstName.value.trim() || !lastName.value.trim()) {
        alert('Please fill all required fields.');
        return;
      }
      
      const status = attendance.value === 'attending' ? 'confirmed - we\'ll see you there!' : 'noted.';
      alert(`Thank you, ${firstName.value} ${lastName.value}! Your RSVP is ${status}`);
      
      submitForm.reset();
      form.classList.add('hidden');
      toggleBtn.textContent = 'RSVP';
    });
  }
}

// Initialize RSVP when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRSVP);
} else {
  initRSVP();
}

