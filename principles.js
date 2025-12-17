document.querySelectorAll('.ripple-btn').forEach(btn => {
  btn.addEventListener('click', function(event) {
    event.preventDefault(); // stop default behavior (just in case)

    const destination = btn.dataset.link; // get the link

    // Ripple effect
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = btn.getBoundingClientRect();
    ripple.style.left = (event.clientX - rect.left) + "px";
    ripple.style.top = (event.clientY - rect.top) + "px";
    btn.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600); // remove ripple after animation

    // Navigate after ripple
    setTimeout(() => {
      window.location.href = destination;
    }, 400);
  });
});

