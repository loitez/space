$(function(){
    $('.slider__box').slick({
        prevArrow: '<img src="images/arrow-left.svg" alt="" class="slider__arrow slider__arrow-left">',
        nextArrow: '<img src="images/arrow-right.svg" alt="" class="slider__arrow slider__arrow-right">',
        dots: true,
        responsive: [
            {
                breakpoint: 1205,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
    ],



    });
    $('.menu-btn').on('click', function () {
        $('.menu__list').toggleClass('active')
    })
    $("#slick-slide-control00").html("");
    $("#slick-slide-control01").html("");
    $("#slick-slide-control02").html("");
});

(function() {
    'use strict';

    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('back_to_top-show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('back_to_top-show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollTo(pageXOffset, 0);
        }
    }

    var goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();

