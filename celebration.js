document.addEventListener("DOMContentLoaded", () => {
  const nxt_button = document.querySelector(".cta");

  nxt_button.addEventListener("click", () => {
    document.body.style.transition =
      "opacity 0.8s ease, transform 0.8s ease, filter 0.8s ease";
    document.body.style.opacity = "0";
    document.body.style.transform = "scale(1.1)"; // Slight zoom-in feel
    document.body.style.filter = "blur(10px)";

    setTimeout(() => {
        window.location.href = "message.html";
    }, 500);
  });
});
