document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = "Descubre más animales 🐾";
  } else {
    document.title = "La Arca de Noé";
  }
});
