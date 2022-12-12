const panels = document.querySelectorAll(".panel");

function toggleOen() {
  this.classList.toggle("open");
}

function toggleEnd(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panels) => panels.addEventListener("click", toggleOen));
panels.forEach((panels) => panels.addEventListener("transitionend", toggleEnd));
