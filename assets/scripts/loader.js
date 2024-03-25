document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS with a longer duration to ensure animations complete before hiding loader
  AOS.init({
    duration: 2000,
  });
  // Show the loader
  document.querySelector(".my-loader").style.display = "flex";
  document.querySelector(".my-loader-body").style.display = "none";

  // Hide the loader after AOS animations are complete
  setTimeout(function () {
    document.querySelector(".my-loader").style.display = "none";
    document.querySelector(".my-loader-body").style.display = "block";
  }, 1500); // Adjust timing as needed based on AOS duration

  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Add click event listener to the button
  scrollToTopBtn.addEventListener("click", function () {
    // Scroll the page to the top with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  function removeAOSOnMobile() {
    if (window.innerWidth <= 768) {
      // Adjust the width condition as needed for your specific case
      var elements = document.querySelectorAll("[data-aos]");
      elements.forEach(function (element) {
        element.removeAttribute("data-aos");
      });
      const mobSlider = document.querySelector(".mobile-carousel");
      console.log("This is mob carousel ", mobSlider);
      mobSlider.style.display = "block";
      const slider = document.querySelector(".pc-carousel");
      slider.style.display = "none";
      console.log("This is desk carousel ", slider);
    } else {
      const mobSlider = document.querySelector(".mobile-carousel");
      mobSlider.style.display = "none";
      // mobSlider.style.position = "absolute";
      const slider = document.querySelector(".pc-carousel");
      slider.style.display = "block";
    }
  }

  // Call the function on page load
  window.onload = function () {
    removeAOSOnMobile();
  };

  // Optional: Call the function on window resize (if needed)
  window.onresize = function () {
    removeAOSOnMobile();
  };
});

const delay = 3000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function () {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function () {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function () {
  changeSlide(false);
  restart();
});
