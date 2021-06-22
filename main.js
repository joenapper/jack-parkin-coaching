const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const header = document.querySelector("header");

// Toggle Nav
function navSlide() {
  burger.addEventListener("click", () => {
    // Overlay Slide In
    nav.classList.toggle("nav-active");
    // Links Slide In
    linkSlide();
    // Burger Animation
    burger.classList.toggle("burger-toggle");
  });
}

// Links Slide In
function linkSlide() {
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.4s ease forwards ${
        index / 4 + 0.3
      }s`;
    }
  });
}

navSlide();

// Adds Background Color
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
