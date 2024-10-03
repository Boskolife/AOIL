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
