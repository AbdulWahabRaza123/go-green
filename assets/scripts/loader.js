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
