function initCoaches() {
  const sliderElement = document.querySelector('[data-slider=coaches]');

  const slider = new Swiper(sliderElement, {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
        slidesPerGroup: 4,
      },
    },
  });
}

export {initCoaches};
