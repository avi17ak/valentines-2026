document.addEventListener("DOMContentLoaded", () => {
  // Select the container (gallery-item) so the hover area is generous
  const galleryItems = document.querySelectorAll(".frame");
  const next_button = document.querySelector(".cta");

  galleryItems.forEach((item) => {
    const video = item.querySelector("video");

    // If there's no video in this specific frame, just skip it
    if (!video) return;

    item.addEventListener("mouseenter", () => {
      video.play().catch((error) => {
        console.log("Playback interaction required:", error);
      });
    });

    item.addEventListener("mouseleave", () => {
      video.pause();
      // Optional: video.currentTime = 0; // Uncomment this to reset to start on leave
    });
  });

  next_button.addEventListener("click", () => {
    document.body.style.transition =
      "opacity 0.8s ease, transform 0.8s ease, filter 0.8s ease";
    document.body.style.opacity = "0";
    document.body.style.transform = "scale(1.1)"; // Slight zoom-in feel
    document.body.style.filter = "blur(10px)";

    setTimeout(() => {
      window.location.href = "presents.html";
    }, 500);
  });
});
