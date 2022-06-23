function initReviews() {
  const sliderElement = document.querySelector('[data-slider=reviews]');

  const slider = new Swiper(sliderElement, {
    slidesPerView: 1,
    spaceBetween: 60,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

export {initReviews};
