const menu = document.querySelector('.sidemenu'),
      hamburger = document.querySelector('.hamburger'),
      close = document.querySelector('.sidemenu__close');


hamburger.addEventListener('click', ()=> {
      menu.classList.add('active');
});
close.addEventListener('click', ()=> {
      menu.classList.remove('active');
});

