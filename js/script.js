$(function () {

    "use strict";

    // Smooth Scroll

    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });

  
    // Featured slider

    $('.comingsoon_slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1500,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
    });



    // Closes responsive menu when a scroll link is clicked

    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    // Wow js

    new WOW().init();



});
