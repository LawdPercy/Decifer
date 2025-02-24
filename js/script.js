let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove("hidden"); // Show the navbar
  } else {
    navbar.classList.add("hidden"); // Hide the navbar
  }
  prevScrollPos = currentScrollPos;
};

