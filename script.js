/* ============================================================
   Deux interactions seulement : menu mobile et visionneuse.
   Sans JavaScript, le menu reste affiché et les captures
   s'ouvrent comme de simples liens vers l'image.
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- Menu mobile ---------- */
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");

  if (nav && toggle) {
    nav.classList.add("is-enhanced");
    toggle.hidden = false;

    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.querySelectorAll(".nav-menu a").forEach(function (link) {
      link.addEventListener("click", function () { setOpen(false); });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ---------- Visionneuse des captures ---------- */
  var shots = document.querySelectorAll(".shot");
  if (!shots.length || typeof HTMLDialogElement !== "function") return;

  var viewer = document.createElement("dialog");
  viewer.className = "viewer";
  viewer.setAttribute("aria-label", "Capture agrandie");
  viewer.innerHTML =
    '<div class="viewer-bar"><button type="button" class="viewer-close">Fermer ' +
    '<svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>' +
    '</button></div><img alt="">';
  document.body.appendChild(viewer);

  var viewerImg = viewer.querySelector("img");
  var closeBtn = viewer.querySelector(".viewer-close");
  var opener = null;

  shots.forEach(function (shot) {
    shot.addEventListener("click", function (e) {
      e.preventDefault();
      var thumb = shot.querySelector("img");
      viewerImg.src = shot.getAttribute("href");
      viewerImg.alt = thumb ? thumb.alt : "";
      opener = shot;
      viewer.showModal();
      closeBtn.focus();
    });
  });

  // Fermeture : bouton, Échap (natif du <dialog>), clic à l'extérieur de l'image.
  closeBtn.addEventListener("click", function () { viewer.close(); });
  viewer.addEventListener("click", function (e) {
    if (e.target === viewer) viewer.close();
  });
  viewer.addEventListener("close", function () {
    viewerImg.removeAttribute("src");
    if (opener) opener.focus();
  });
});
