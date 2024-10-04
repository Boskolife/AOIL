burgerInit();

function burgerInit() {
  const burger = document.querySelector('.burger_menu');
  const menu = document.querySelector('.menu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('active_menu');
    document.body.classList.toggle('body_lock');
  });
}

const swiper = new Swiper('.swiper_certificate', {
  slidesPerView: 3,
  spaceBetween: 30,

  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 15,
      centeredSlides: true,
      initialSlide: 1,
    },
    375: {
      slidesPerView: 1.5,
      spaceBetween: 25,
      centeredSlides: true,
      initialSlide: 1,
    },
    480: {
      slidesPerView: 1.6,
      spaceBetween: 25,
      centeredSlides: true,
      initialSlide: 1,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 25,
      centeredSlides: true,
      initialSlide: 1,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 25,
      centeredSlides: true,
      initialSlide: 1,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
