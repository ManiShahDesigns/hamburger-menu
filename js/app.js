const burgerMenu = document.getElementById("menu-icon");
const menu = document.getElementById("menu-body");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("open-menu");
  menu.classList.toggle("open");
});
