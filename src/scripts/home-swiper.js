document.addEventListener("DOMContentLoaded", () => {
  // Services carousel
  new Swiper(".services-swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".services-swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".services-swiper .swiper-button-next",
      prevEl: ".services-swiper .swiper-button-prev",
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
    },
  });

  // Team carousel
  new Swiper(".team-swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".team-swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".team-swiper .swiper-button-next",
      prevEl: ".team-swiper .swiper-button-prev",
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
    },
  });
});
