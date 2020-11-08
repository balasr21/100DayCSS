document
  .getElementsByClassName("menu-icon")[0]
  .addEventListener("click", function (e) {
    if (document.getElementsByClassName("active")[0] === undefined) {
      this.classList.remove("reverse");
      setTimeout(() => {
        this.classList.add("active");
      }, 0);
    } else {
      this.classList.remove("active");
      setTimeout(() => {
        this.classList.add("reverse");
      }, 0);
    }
  });

document
  .getElementsByClassName("line")[0]
  .addEventListener("click", function (e) {
    if (document.getElementsByClassName("active")[0] === undefined) {
      this.classList.remove("reverse");
      setTimeout(() => {
        this.classList.add("active");
      }, 0);
    } else {
      this.classList.remove("active");
      setTimeout(() => {
        this.classList.add("reverse");
      }, 0);
    }
  });
