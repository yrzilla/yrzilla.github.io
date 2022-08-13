window.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('.menu'),
          hamburger = document.querySelector('.hamburger'),
          close = document.querySelector('.menu__close');


    hamburger.addEventListener('click', ()=> {
        menu.classList.add('active');
    });
    close.addEventListener('click', ()=> {
        menu.classList.remove('active');
    });

    const progress = document.querySelectorAll('.skills__rating-progress'),
          line = document.querySelectorAll('.skills__rating-line span');
    
    progress.forEach((item, i) => {
        line[i].style.width = item.innerHTML;
    });

});