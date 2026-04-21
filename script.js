const menuToggle = document.querySelector(".close-menu");
const navMenu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}
