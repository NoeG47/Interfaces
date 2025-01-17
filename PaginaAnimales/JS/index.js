//Cambio de título si el usuario cambia de página
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = "Descubre más animales 🐾";
  } else {
    document.title = "La Arca de Noé";
  }
});

//Cambio de color del navbar
document.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//Menu hamburguesa
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("active");
});

//Aquí cambiamos el modo de claro a oscuro
document.addEventListener("DOMContentLoaded", function () {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const userTheme = localStorage.getItem("theme");
  const htmlElement = document.documentElement;

  if (userTheme) {
    htmlElement.classList.toggle("dark-mode", userTheme === "dark");
  } else {
    htmlElement.classList.toggle("dark-mode", prefersDark);
  }

  // Opción para alternar manualmente el tema
  document.querySelector("#theme-toggle").addEventListener("click", () => {
    const isDarkMode = htmlElement.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });
});
