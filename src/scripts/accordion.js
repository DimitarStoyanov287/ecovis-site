document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((acc) => {
    acc.querySelector(".heading").addEventListener("click", () => {
      acc.classList.toggle("active");

      // collapse others
      accordions.forEach((other) => {
        if (other !== acc) other.classList.remove("active");
      });
    });
  });
});
