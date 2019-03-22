$(document).ready(function(){
    var count = 0;
    var target = $('#map');
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToMap = targetPos - winHeight;
    $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop();
        if(winScrollTop > scrollToMap & count == 0) {
            target.append('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9f5c91b84eb6c3ff696b5b9913842fee6b26918a6edb60f932c440bf38ae371f&amp;width=100%25&amp;height=418&amp;lang=ru_RU&amp;scroll=false"></script>');
            count++;
        }
    });

    // 
    var close = $('#close');
    var modal = $('#modal');

    // плавная прокрутка до якоря
    $("body").on('click', '[href*="#"]', function(e){
        var fixed_offset = 60;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
      });
    
    // обработка формы Ajax
    $('#form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            url: "../php/mail.php",
            type: 'POST',
            success: function() {
                modal.addClass('modal_active');
            }
        });
    });
    
    //маска для номера телефона
    $('.main__phone').mask("+7 (999) 999-99-99");
    // валидация формы
    $('#form').validate({
        rules: {
            username: {
                required: true,
                minlength: 2
            },
            userPhone: {
                required: true
            },
            userEmail: {
                required: true
            }
        },
        errorClass: "invalid",
        errorElement: "div",
        messages: {
            username: {
                required: "Укажите имя",
                minlength: jQuery.validator.format("Нужно еще {0} символа(-ов)"),
                maxlength: jQuery.validator.format("Максимальное количество символов {0}")
            },
            userPhone: "Укажите телефон",
            userEmail: {
                required: "Укажите email",
                email: "Введите корректный email"
            }
        }
    });

    // $(window).scrollTop(function() {
    //     $('.section-navbar').css('display', 'none')
    // });

// подключаем слайдер slick
$('.projects__slider').slick({
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    fade: true
}); 


// подключаем слайдер OWL
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 32.2,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 320 up
            320: {
                items: 1
            },
            // breakpoint from 576 up
            576 : {
                items: 1
            },
            // breakpoint from 768 up
            768 : {
                items: 2
            },
            // breakpoint from 992 up
            992 : {
                items: 3
            },
            // breakpoint from 1200 up
            1200 : {
                items: 5
            }
        }
    });
    // вешаем прокрутку слайдера на наши кнопки
    var owl = $('.owl-carousel');

    owl.owlCarousel();
    $('.company__left-arrow').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.company__right-arrow').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

    // инициализация анимации
    new WOW().init();

});

