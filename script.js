const preload = document.querySelector(".preload");

window.addEventListener("load", () => {
  preload.classList.add("preloaded");
});

preload.addEventListener("transitionend", () => {
  preload.style.display = "none";
});