const menuToggle = document.querySelector(".open-menu");
const menuToggles = document.querySelector(".close-menu");
const navMenu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");
const body = document.body;

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.add("active");
    menuToggle.classList.add("actives");
    menuToggles.classList.add("activesed");
    body.classList.add("no-scroll");
  });

  menuToggles.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("actives");
    menuToggles.classList.remove("activesed");
    body.classList.remove("no-scroll");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("actives");
      menuToggles.classList.remove("activesed");
      body.classList.remove("no-scroll");
    });
  });
}
