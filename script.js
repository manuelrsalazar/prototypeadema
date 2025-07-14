// Al cargar la página, chequea si viene ?materia=...
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const materia = params.get("materia");
  if (materia) {
    // Busca pestaña, botón genérico o botón de la grid de materias
    const btnTab = document.querySelector(
      `.tab-button[data-target="${materia}"]`
    );
    const btnMat = document.querySelector(`.btn[data-target="${materia}"]`);
    const btnGrid = document.querySelector(
      `.grid-btn[data-target="${materia}"]`
    );
    const btn = btnTab || btnMat || btnGrid;
    if (btn) {
      btn.click();
      // Limpia la URL para no reaplicar al recargar
      history.replaceState(null, "", window.location.pathname);
    }
  }
});

// Funcionalidad SPA: mostrar/ocultar pantallas y activar tabs
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-target]");
  if (!btn) return;

  const targetId = btn.getAttribute("data-target");

  // Desactiva todas las pantallas y pestañas
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll(".tab-button")
    .forEach((t) => t.classList.remove("active"));

  // Si es una pestaña, márcala activa
  if (btn.classList.contains("tab-button")) {
    btn.classList.add("active");
  }

  // Muestra la pantalla destino
  const dest = document.getElementById(targetId);
  if (dest) dest.classList.add("active");
});

// Redirecciones entre index.html y horarios.html
document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-horarios")) {
    // Desde index → horarios
    window.location.href = "horarios.html";
  }
  if (e.target.matches(".btn-volver")) {
    // Desde horarios → index
    window.location.href = "index.html";
  }
});
