const menuToggle = document.querySelector(".open-menu");
const menuToggles = document.querySelector(".close-menu");
const navMenu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");
const menuName = document.querySelectorAll(".logo");
const classHead = document.querySelectorAll(".head-n");

menuName.addEventListener("click", () => {
  classHead.classList.toggle("active-name");
});

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("actives");
    menuToggles.classList.toggle("activesed");
  });

  menuToggles.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("actives");
    menuToggles.classList.toggle("activesed");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("actives");
      menuToggles.classList.remove("activesed");
    });
  });
}
