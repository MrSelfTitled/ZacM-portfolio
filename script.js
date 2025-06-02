document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const modal = document.getElementById("videoModal");
  const modalContent = document.querySelector(".modal-content");
  const modalVideo = document.getElementById("modalVideo");

  if (!modal || !modalContent || !modalVideo || thumbnails.length === 0) {
    console.warn("One or more elements for modal video playback not found.");
    return;
  }

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const videoUrl = thumb.getAttribute("data-video");
      if (videoUrl) {
        modalVideo.src = videoUrl + "?autoplay=1";
        modal.classList.add("open");
      }
    });
  });

  modal.addEventListener("click", (e) => {
    if (!modalContent.contains(e.target)) {
      modal.classList.remove("open");
      modalVideo.src = ""; // Stop video playback
    }
  });
});
