$(document).ready(function(){
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

