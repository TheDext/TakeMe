
const swiper = new Swiper ('.mainscreen__slider', {
   slidesPerGroup: 1,   // Количество прокручиваемых слайдов
   simulateTouch: false,
   slidesPerView: 1,
   loop: true,
   effect: 'fade',
   fadeEffect: {
         //Параллельная смена прозрачности
         crossFade: true, //(включать вседа, пчти)
      },
   autoplay: {
         delay: 7500,
         // Закончить на последнем слейде
         stopOnLastSlide: false,
         // Отключить после ручного переключения
         disableOnInteraction: true,
      }
});

const swiperSantorini = new Swiper ('.slider-santorini', {
   slidesPerGroup: 1,   // Количество прокручиваемых слайдов
   simulateTouch: true,
   slidesPerView: 2,
   spaceBetween: 30,
   loop: false,
   initialSlide: 0,
   pagination: {
      el: '.santorini__bullets',
       // Буллеты
         clickable: true,
         dynamicBullets: true,
   },
});

const swiperActions = new Swiper ('.slider-actions', {
   slidesPerGroup: 1,   // Количество прокручиваемых слайдов
   simulateTouch: true,
   // slidesPerView: 3,
   centeredSlides: true,
   loop: false,
   initialSlide: 1,
   spaceBetween: 30,
   pagination: {
      el: '.actions-bullets',
      clickable: true,
      dynamicBullets: false,
      },
    navigation: {
      nextEl: '.actions-arrow_next',
      prevEl: '.actions-arrow_prev'
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 2,
      },
      768: {
         slidesPerView: 3,
      }
   },
});