document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll(".accordion-body img, #img-oscar");
  const overlay = document.getElementById("zoom-overlay");
  const zoomImg = document.getElementById("zoom-img");

  let scale = 1;
  let dragging = false;
  let startX = 0, startY = 0, imgX = 0, imgY = 0;

  if (!overlay || !zoomImg) return;

  // Abrir modal ao clicar em qualquer imagem
  imgs.forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      zoomImg.src = img.src;

      scale = 1;
      imgX = imgY = 0;

      zoomImg.style.transform = "translate(0px,0px) scale(1)";
      zoomImg.style.cursor = "zoom-in";

      overlay.style.display = "flex";
      overlay.setAttribute("aria-hidden", "false");
    });
  });

  // Fechar clicando fora da imagem
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.style.display = "none";
      overlay.setAttribute("aria-hidden", "true");
    }
  });

  // ESC fecha
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      overlay.style.display = "none";
      overlay.setAttribute("aria-hidden", "true");
    }
  });

  // Clique na imagem → zoom
  zoomImg.addEventListener("click", (e) => {
    e.stopPropagation();

    if (scale < 2.8) {
      scale += 0.35;
      zoomImg.style.cursor = "zoom-out";
    } else {
      scale = 1;
      imgX = imgY = 0;
      zoomImg.style.cursor = "zoom-in";
    }

    zoomImg.style.transform = `translate(${imgX}px, ${imgY}px) scale(${scale})`;
  });

  // Arrastar quando ampliado
  zoomImg.addEventListener("mousedown", (e) => {
    if (scale <= 1) return;

    dragging = true;
    zoomImg.style.cursor = "grabbing";

    startX = e.clientX - imgX;
    startY = e.clientY - imgY;

    e.preventDefault();
  });

  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;

    imgX = e.clientX - startX;
    imgY = e.clientY - startY;

    zoomImg.style.transform = `translate(${imgX}px, ${imgY}px) scale(${scale})`;
  });

  document.addEventListener("mouseup", () => {
    dragging = false;

    if (scale > 1) zoomImg.style.cursor = "grab";
  });
});