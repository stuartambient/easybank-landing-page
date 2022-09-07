const open = document.querySelector('.navtop__open');
const close = document.querySelector('.navtop__close');

open.addEventListener('click', () => {
  open.classList.toggle('close-menu');
  close.classList.toggle('open-menu');
});

close.addEventListener('click', () => {
  open.classList.toggle('close-menu');
  close.classList.toggle('open-menu');
});
