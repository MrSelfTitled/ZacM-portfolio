document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const videoUrl = thumb.getAttribute("data-video");
      modalVideo.src = videoUrl + "?autoplay=1";
      modal.classList.add("open");
    });
  });

  // Close modal when clicking outside the iframe
  modal.addEventListener("click", (e) => {
    if (!modalVideo.contains(e.target)) {
      modal.classList.remove("open");
      modalVideo.src = ""; // Stop video playback
    }
  });
});
