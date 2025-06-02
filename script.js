// script.js

// ==========================
// CRT LOADING ANIMATION
// ==========================
window.addEventListener("load", () => {
  const loader = document.querySelector("#crt-loader");
  setTimeout(() => {
    loader.classList.add("loaded");
  }, 1500);
});

// ==========================
// VIDEO MODAL FUNCTIONALITY
// ==========================
document.querySelectorAll(".thumbnail").forEach((thumb) => {
  thumb.addEventListener("click", function () {
    const videoId = this.getAttribute("data-video-id");
    const modal = document.querySelector("#video-modal");
    const iframe = document.querySelector("#video-modal iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.classList.add("open");
  });
});

document.querySelector("#video-modal").addEventListener("click", function (e) {
  // Close only if click is outside iframe
  if (e.target === this) {
    const iframe = document.querySelector("#video-modal iframe");
    iframe.src = ""; // stop video
    this.classList.remove("open");
  }
});

// ==========================
// AOS INIT (Animate on Scroll)
// ==========================
AOS.init({
  duration: 800,
  once: true,
});

// ==========================
// CUSTOM CURSOR
// ==========================
const cursor = document.createElement("div");
cursor.id = "custom-cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
