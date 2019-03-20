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


    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 32.2,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            768 : {
                items: 3
            },
            // breakpoint from 768 up
            1200 : {
                items: 5
            }
        }
    });

    var owl = $('.owl-carousel');

    owl.owlCarousel();
    $('.company__left-arrow').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.company__right-arrow').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

});

