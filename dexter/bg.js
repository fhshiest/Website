const dots = document.querySelectorAll('.dot');

const dotData = Array.from(dots).map(dot => {
  // Initialize random position and velocity
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const vx = (Math.random() - 0.5) * 1.5;
  const vy = (Math.random() - 0.5) * 1.5;

  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;

  return { el: dot, x, y, vx, vy };
});

function animateDots() {
  for (const dot of dotData) {
    dot.x += dot.vx;
    dot.y += dot.vy;

    // Bounce off edges
    if (dot.x <= 0 || dot.x >= window.innerWidth - 8) dot.vx *= -1;
    if (dot.y <= 0 || dot.y >= window.innerHeight - 8) dot.vy *= -1;

    dot.el.style.left = `${dot.x}px`;
    dot.el.style.top = `${dot.y}px`;
  }

  requestAnimationFrame(animateDots);
}

animateDots();
