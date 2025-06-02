document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".portfolio-item");
  const modal = document.getElementById("videoModal");
  const modalContent = document.getElementById("modalContent");

  thumbnails.forEach((item) => {
    item.addEventListener("click", () => {
      const videoUrl = item.getAttribute("data-video-url");
      if (videoUrl) {
        modalContent.innerHTML = `
          <iframe width="100%" height="100%" src="${videoUrl}?autoplay=1" 
            frameborder="0" allowfullscreen allow="autoplay"></iframe>
        `;
        modal.classList.add("show");
      }
    });
  });

  // Close modal when clicking outside the content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      modalContent.innerHTML = ""; // Stop video playback
    }
  });
});

