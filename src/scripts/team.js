document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const groups = document.querySelectorAll(".team-group");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("active")) return; // already selected

      // Update button active state
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const target = btn.dataset.target;

      // Loop through each group
      groups.forEach((group) => {
        if (group.id === target) {
          // Fade in the selected group
          group.style.display = "block";
          requestAnimationFrame(() => {
            group.style.opacity = "1";
            group.style.transform = "translateY(0)";
            group.style.pointerEvents = "all";
          });
        } else {
          // Fade out the non-selected group
          group.style.opacity = "0";
          group.style.transform = "translateY(20px)";
          group.style.pointerEvents = "none";
          setTimeout(() => (group.style.display = "none"), 300);
        }
      });
    });
  });
});


const buttons = document.querySelectorAll('.filter-btn');
const groups = document.querySelectorAll('.team-group');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const target = btn.dataset.target;
    groups.forEach(g => g.classList.toggle('hidden', g.id !== target));
  });
});
