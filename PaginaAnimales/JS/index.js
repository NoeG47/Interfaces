document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = "Descubre más animales 🐾";
  } else {
    document.title = "La Arca de Noé";
  }
});
document.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("active");
});
