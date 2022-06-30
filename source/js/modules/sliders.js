let coachesSlider = document.querySelector('[data-slider=coaches]');
let reviewsSlider = document.querySelector('[data-slider=reviews]');
let abonementsSlider = document.querySelector('[data-slider=abonements]');
let abonementsThumbs = document.querySelector('[data-slider=abonements-thumbs]');


function initSliders() {
  if (abonementsSlider && abonementsThumbs) {
    const thumbs = abonementsThumbs.querySelectorAll('[data-slide]');

    abonementsThumbs = new window.Swiper(abonementsThumbs, {
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

    abonementsSlider = new window.Swiper(abonementsSlider, {
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

  if (coachesSlider) {
    let coachesItems;

    coachesSlider = new window.Swiper(coachesSlider, {
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
          coachesItems = document.querySelectorAll('.coaches__item');

          for (let item of coachesItems) {
            if (item.classList.contains('swiper-slide-duplicate')) {
              item.removeAttribute('tabindex');
            } else {
              item.setAttribute('tabindex', '0');
              // item.addEventListener('focus', () => {
              //   if (!item.classList.contains('swiper-slide-active')) {
              //     coachesSlider.slideTo(item.dataset.swiperSlideIndex);
              //   }
              // });
            }
          }
        },
      },
    });
  }

  if (reviewsSlider) {
    reviewsSlider = new window.Swiper(reviewsSlider, {
      slidesPerView: 1,
      spaceBetween: 60,
      navigation: {
        nextEl: '.reviews__navigation--next',
        prevEl: '.reviews__navigation--prev',
      },
    });
  }
}

export {coachesSlider, reviewsSlider, abonementsSlider, abonementsThumbs, initSliders};
