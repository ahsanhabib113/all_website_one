//navbar

const navBar = document.querySelector(".navbar-item");
const menuBar = document.querySelector("#menu-bar");

menuBar.addEventListener("click", () => {
  navBar.classList.toggle("active");
  menuBar.classList.toggle("bx-x");
});

window.addEventListener("scroll", () => {
  navBar.classList.remove("active");
  menuBar.classList.remove("bx-x");
});
