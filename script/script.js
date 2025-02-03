document.addEventListener("DOMContentLoaded", function () {
  let dropdown = document.querySelector(".dropdown");

  dropdown.addEventListener("mouseenter", function () {
    this.querySelector(".dropdown-content").style.display = "block";
  });

  dropdown.addEventListener("mouseleave", function () {
    this.querySelector(".dropdown-content").style.display = "none";
  });
});
