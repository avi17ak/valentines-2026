document.addEventListener("DOMContentLoaded", () => {
  // 1. Easing curve for the button pulse/scale effect
  const scaleCurve = mojs.easing.path(
    "M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0",
  );

  const buttons = document.querySelectorAll(".button");

  buttons.forEach((btn) => {
    const heartText = btn.querySelector("#heart");

    // 2. Handle the "No" to "Yes" text swap on hover
    if (btn.classList.contains("no-to-yes")) {
      btn.addEventListener("mouseenter", () => {
        if (!btn.classList.contains("active")) {
          heartText.textContent = "Yes";
        }
      });

      btn.addEventListener("mouseleave", () => {
        if (!btn.classList.contains("active")) {
          heartText.textContent = "No";
        }
      });
    }

    // 3. Click Interaction & mo.js Animation
    btn.addEventListener("click", function () {
      if (!this.classList.contains("active")) {
        const el = this;

        // Ensure text stays "Yes" once clicked
        heartText.textContent = "Yes";

        // --- Create mo.js Tweens ---
        
        // Burst 1: Red and White circles
        const burst1 = new mojs.Burst({
          parent: el,
          radius: { 0: 100 },
          angle: { 0: 45 },
          y: -10,
          count: 10,
          children: {
            shape: "circle",
            radius: 30,
            fill: ["#ff4d4d", "white"],
            strokeWidth: 15,
            duration: 500,
          },
        });

        // Burst 2: Larger burst
        const burst2 = new mojs.Burst({
          parent: el,
          radius: { 0: 125 },
          angle: { 0: -45 },
          y: -10,
          count: 10,
          children: {
            shape: "circle",
            radius: 30,
            fill: ["white", "#bd2743"],
            strokeWidth: 15,
            duration: 400,
          },
        });

        // Pulse: The button itself grows and shrinks
        const pulse = new mojs.Tween({
          duration: 900,
          onUpdate: function (progress) {
            const scaleProgress = scaleCurve(progress);
            el.style.transform = `scale3d(${scaleProgress}, ${scaleProgress}, 1)`;
          },
        });

        // --- Play Animation ---
        const timeline = new mojs.Timeline();
        timeline.add(burst1, burst2, pulse);
        timeline.play();

        // Mark as active to lock the state
        this.classList.add("active");
        this.style.pointerEvents = "none";

        setTimeout(() => {
            window.location.href = 'celebration.html';
        }, 1000)
        console.log('Redirecting...')
        
        
      }
    });
  });
});