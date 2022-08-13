new Swiper('.image-slider',{
      
    autoHeight: false,
    spaceBetween: 30,
        effect: "fade",

    centeredSlides: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },

    breakpoints: {
      320: {
        slidePerView: 1,
      },
      480: {
        slidePerView: 2,
      },
      992: {
        slidePerView: 3,
      }
    }
});


$(window).scroll(function() {
    if($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $(function(){
    $("a[href^=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
  });



// Modal

$('[data-modal="consultation"]').on('click', function() {
  $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function(){
  $('.overlay, #consultation, #message').fadeOut('fast');
});

$('.button_mini').each(function(i) {
  $(this).on('click', function() {
    $('.modal__descr').text($('.catalog-item__subtitle').eq(i).text());
    $('.overlay').fadeIn('slow');
  })
});

// Validate forms

function validateForms(form) {
  $(form).validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name:{
        required:"Пожалуйста введите своё имя",
        minlength: jQuery.validator.format("Введите {0} символов!")
      },
      phone:"Пожалуйста введите свой телефон",
      email:{
        required: "Пожалуйста введите свою почту",
        email: "Неправильно введён адрес почты"
      }
    }
  });
};
validateForms("#consultation-form");
validateForms("#consultation form");

// Mask

$('input[name=phone]').mask("+7 (999) 999-99-99");

// Form

$('form').submit( function(e) {
  e.preventDefault();
  $.ajax({
    type:"POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done( function(){
    $(this).find('input').val("");
    $('#consultation').fadeOut();
    $('.overlay, #message').fadeIn('slow');

    $('form').trigger('reset');
  });
  return false;

});


const menu = document.querySelector('.sidemenu'),
      hamburger = document.querySelector('.hamburger'),
      close = document.querySelector('.sidemenu__close');


hamburger.addEventListener('click', ()=> {
      menu.classList.add('active');
});
close.addEventListener('click', ()=> {
      menu.classList.remove('active');
});




