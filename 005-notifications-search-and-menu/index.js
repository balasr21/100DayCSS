let notificationMenuElement = document.querySelector(".notification-menu");
let notificationElement = document.querySelector(".center");
let menuElement = document.querySelector(".menu");
let searchIconElement = document.querySelector(".search-icon");
let searchBoxElement = document.querySelector(".search-item");

notificationMenuElement.addEventListener("click", () => {
  menuElement.classList.toggle("active");
  notificationElement.classList.toggle("inactive");
});

searchIconElement.addEventListener("click", () => {
  searchBoxElement.classList.toggle("active");
});
