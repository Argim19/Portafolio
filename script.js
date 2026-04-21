const menuTogle = document.querySelector(".close-menu");
const navMenu = document.querySelector(".menu");
menuTogle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
