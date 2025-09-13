// Select menu toggle and nav links

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

// Toggle menu on click

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});