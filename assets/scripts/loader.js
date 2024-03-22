document.addEventListener("DOMContentLoaded", function () {
  // show the loader

  AOS.init({
    duration: 2000,
  });

  document.querySelector(".loader-wrapper").style.display = "flex";

  // hide the loader after 3 seconds

  setTimeout(function () {
    document.querySelector(".loader-wrapper").style.display = "none";
  }, 2000);
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
