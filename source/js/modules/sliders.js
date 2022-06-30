import Swiper from '../vendor/swiper';

const coachesSliderElement = document.querySelector('[data-slider=coaches]');
let reviewsSlider = document.querySelector('[data-slider=reviews]');
let abonementsSlider = document.querySelector('[data-slider=abonements]');
let abonementsThumbs = document.querySelector('[data-slider=abonements-thumbs]');


function initSliders() {
  let coachesSlider;

  if (abonementsSlider && abonementsThumbs) {
    const thumbs = abonementsThumbs.querySelectorAll('[data-slide]');

    abonementsThumbs = new Swiper(abonementsThumbs, {
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

    abonementsSlider = new Swiper(abonementsSlider, {
      spaceBetween: 10,
      allowTouchMove: false,
      thumbs: {
        swiper: abonementsThumbs,
        slideThumbActiveClass: 'is-active',
      },
    });

    for (let thumb of thumbs) {
      thumb.addEventListener('keydown', (evt) => {
        if (evt.key !== 'Tab') {
          evt.preventDefault();
        }

        if (evt.key === ' ' || evt.key === 'Enter') {
          abonementsSlider.slideTo(thumb.dataset.slide);
        }
      });
    }
  }

  if (coachesSliderElement) {
    coachesSlider = new Swiper(coachesSliderElement, {
      loop: true,

      navigation: {
        nextEl: '.coaches__navigation--next',
        prevEl: '.coaches__navigation--prev',
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },

      on: {
        afterInit: () => {
          const coachesItems = coachesSliderElement.querySelectorAll('.coaches__item');

          for (let item of coachesItems) {
            if (item.classList.contains('swiper-slide-duplicate')) {
              item.removeAttribute('tabindex');
            } else {
              item.setAttribute('tabindex', '0');
            }
          }
        },
      },
    });
  }

  if (reviewsSlider) {
    reviewsSlider = new Swiper(reviewsSlider, {
      slidesPerView: 1,
      spaceBetween: 60,
      navigation: {
        nextEl: '.reviews__navigation--next',
        prevEl: '.reviews__navigation--prev',
      },
    });
  }

  return coachesSlider;
}

export {reviewsSlider, abonementsSlider, abonementsThumbs, initSliders};
