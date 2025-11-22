document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".nav-item.dropdown");

  dropdowns.forEach(drop => {
    const link = drop.querySelector(".nav-link");

    link.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation(); // evita que o clique "vaze" para o document
      dropdowns.forEach(d => {
        if (d !== drop) d.classList.remove("show");
      });
      drop.classList.toggle("show");
    });
  });

  document.addEventListener("click", () => {
    dropdowns.forEach(drop => {
      drop.classList.remove("show");
    });
  });
});