

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".number");
  let started = false;

  function animateNumbers() {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const increment = target / 100;
      const updateCount = () => {
        const value = +counter.innerText;
        if (value < target) {
          counter.innerText = Math.ceil(value + increment);
          setTimeout(updateCount, 7.5);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }

  const statsSection = document.querySelector(".stats");
  if (!statsSection) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        animateNumbers();
        started = true;
      }
    });
  }, { threshold: 0.4 });

  observer.observe(statsSection);
});
