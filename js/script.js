
///----------hamburger-menu-----------------------------///

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.top-menu'),
  menuItem = document.querySelectorAll('.top-menu_item'),
  hamburger = document.querySelector('.hamburger'),
  wrap = document.querySelector('.top-menu__wrap');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('top-menu_active');
      wrap.classList.toggle('top-menu__wrap_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('top-menu_active');
          wrap.classList.toggle('top-menu__wrap_active');
      });
  });


///------------------menu-fixed---------------------///

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('.default-menu').addClass('default-menu_fixed');
        } else {
            $('.default-menu').removeClass('default-menu_fixed');
        }
  });
});

///--------------slaider-----------------///

    $('.friends__wrapper').slick({
        autoplay:true,
        autoplaySpeed:1200,
        arrows:false
        /* prevArrow:'<button type="button" class="slick-prev"><img src="../img/chevron-left-solid.png"></button>',
        nextArrow:'<button type="button" class="slick-prev"><img src="../img/chevron-right-solid.png"></button>' */
    });


///--------------slow-scroll-----------------///

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
});

///--------------card-trainings-----------------///
class Card {
  constructor(title, questions, oldPrice, parentSel){
    this.title = title;
    this.questions = questions;
    this.oldPrice = oldPrice;
    this.price = 85;
    this.parent = document.querySelector(parentSel);
    this.makePrice();
  }

  makePrice(){
    this.price = Math.round(this.oldPrice/100 * this.price);
     
  }

  renderMain(){
    const elementCard = document.createElement('div');
    elementCard.classList.add('order__pack');
    elementCard.innerHTML = `<div class="order__subtitle">Пакет</div>
    <div class="order__name">${this.title}</div>
    <div class="order__descr">Срок: <p>в пределах 24 часов</p>Вопросов/комплектов на оценку: <p>${this.questions}</p></div>
    <div class="order__bottom">
      <div class="order__price">${this.oldPrice}</div>
      <div class="order__newprice">${this.price + '₽'}</div>
      <button class="order__btn">Заказать</button>
    </div>`;
    this.parent.append(elementCard);
  }

  /* renderForm(){

  } */
}

new Card(
  "«Попробовать»",
  "5 ваших луков или 5 вопросов",
  1250,
  ".order__wrapper"
).renderMain();

new Card(
  "«1 день»",
  "до 100",
  3950,
  ".order__wrapper"
).renderMain();

new Card(
  "«1 месяц»",
  "неограниченно",
  11990,
  ".order__wrapper"
).renderMain();



///--------------modal-window-----------------///

$('.modal__close').on('click', function (){
    $('.overlay, .modal__forms').fadeOut();
  });
  
  $('.buy_btn').each(function(i) {
    $(this).on('click', function() {
      $('#buy .modal__pack').text('Пакет ' + $('.packs-descr__name').eq(i).text());
      $('#buy .modal__descr').text($('.order').eq(i).text());
      $('.overlay, #buy').fadeIn('slow');
    });
  });

  $('.order__btn').each(function(i) {
    $(this).on('click', function() {
      $('#buy .modal__pack').text('Пакет ' + $('.order__name').eq(i).text());
      $('#buy .modal__descr').text($('.order__newprice').eq(i).text());
      $('.overlay, #buy').fadeIn('slow');
    });
  });

///--------------animate-settings-----------------/// 

new WOW().init();

///--------------mask-phone-----------------/// 

$('input[name=phone]').mask("+7 (999) 999-99-99");

///--------------validate-----------------/// 

function valideForms(form) {
  $(form).validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: "required"
  },
  messages: {
    name: {
      required: "Введите ваше имя",
      minlength: jQuery.validator.format("Введите больше {0} символов")
    },
    phone: "неверный формат номера"
  }
  });
}
valideForms('#buy form');


});



