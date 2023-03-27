//=============== MENU ASSIGN ===============
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//===== SHOW MENU =====
// Validate if constant exists

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//=====HIDE MENU =====

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//=====REMOVE MOBILE MENU onClick Link=====
navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== CHANGE BACKGROUND HEADER =====*/
// When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag

function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 80) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);
