document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS with a longer duration to ensure animations complete before hiding loader
  AOS.init({
    duration: 2000,
  });

  // Show the loader
  document.querySelector(".my-loader").style.display = "flex";

  // Hide the loader after AOS animations are complete
  setTimeout(function () {
    document.querySelector(".my-loader").style.display = "none";
  }, 1500); // Adjust timing as needed based on AOS duration
});

function removeAOSOnMobile() {
  if (window.innerWidth <= 768) {
    // Adjust the width condition as needed for your specific case
    var elements = document.querySelectorAll("[data-aos]");
    elements.forEach(function (element) {
      element.removeAttribute("data-aos");
    });
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
