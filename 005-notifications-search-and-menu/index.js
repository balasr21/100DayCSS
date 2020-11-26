let notificationMenuElement = document.querySelector(".notification-menu");
let notificationElement = document.querySelector(".center");
let menuElement = document.querySelector(".menu");

notificationMenuElement.addEventListener("click", () => {
  menuElement.classList.toggle("active");
  notificationElement.classList.toggle("inactive");
});
