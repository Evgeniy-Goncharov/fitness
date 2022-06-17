// import swiper from "../vendor/swiper";

function initTabs() {
  const sliderElement = document.querySelector('[data-slider=abonements]');
  const thumbsElement = document.querySelector('[data-slider=abonements-thumbs]');

  if (sliderElement && thumbsElement) {
    const thumbs = new Swiper(thumbsElement, {
      spaceBetween: 31,
      slidesPerView: 'auto',
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        768: {
          spaceBetween: 55,
        },
        1200: {
          spaceBetween: 45,
        },
      },
    });

    const slider = new Swiper(sliderElement, {
      spaceBetween: 10,
      allowTouchMove: false,
      thumbs: {
        swiper: thumbs,
        slideThumbActiveClass: 'is-active',
      },
    });
  }
}

export {initTabs};
