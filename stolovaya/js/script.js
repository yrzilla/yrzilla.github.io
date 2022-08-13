window.addEventListener('DOMContentLoaded', () => {

    const mailCopyLink = document.querySelector('.menu__item__mail'),
          mailCopyBtn = document.querySelector('.mail-copy'),
          telBtn = document.querySelector('.menu__item_tel'),
          callbackWindow = document.querySelector('.menu__form'),
          closeCallback = document.querySelector('.menu__form__close'),
          overlay = document.querySelector('.overlay'),
          selectBtn = document.querySelector('.search-panel__categories'),
          selectWindow = document.querySelector('.search-select');


        mailCopyLink.addEventListener('click', () => {
            mailCopyBtn.classList.toggle('menu__item__mail_active')
            mailCopyLink.style.backgroundColor = '#5db975';
        });

        telBtn.addEventListener('mouseover', ()=> {
            callbackWindow.style.display = 'flex';
            telBtn.style.backgroundColor = '#5db975';
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        selectBtn.addEventListener('click', ()=> {
            selectWindow.classList.toggle('search-select_active');
        });

        closeCallback.addEventListener('click', ()=> {
            callbackWindow.style.display = 'none';
            overlay.style.display = 'none';
            telBtn.style.backgroundColor = '#34a853';
            document.body.style.overflow = '';
        });

});