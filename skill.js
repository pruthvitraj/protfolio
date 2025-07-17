function initProgressRings() {
  const circles = document.querySelectorAll(".circle-fill");

  circles.forEach(circle => {
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const percent = parseFloat(circle.dataset.percentage) || 0;

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    const offset = circumference - (percent / 100) * circumference;

    setTimeout(() => {
      circle.style.strokeDashoffset = offset;
      circle.classList.add("is-animated");

      const overlay = circle.closest(".progress-circle-container").querySelector(".percentage-overlay");
      if (overlay) {
        overlay.textContent = `${percent}%`;
        overlay.classList.add("is-animated");
      }
    }, 200);
  });
}
