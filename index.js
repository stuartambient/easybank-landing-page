const open = document.querySelector('.navtop__open');
const close = document.querySelector('.navtop__close');
const mobileMenu = document.querySelector('.mobile__menu');

open.addEventListener('click', () => {
  open.classList.toggle('close-menu');
  close.classList.toggle('open-menu');
  mobileMenu.classList.toggle('mobile__menu-open');
});

close.addEventListener('click', () => {
  open.classList.toggle('close-menu');
  close.classList.toggle('open-menu');
  mobileMenu.classList.toggle('mobile__menu-open');
});
