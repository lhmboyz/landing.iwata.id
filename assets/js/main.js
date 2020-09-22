(function ($) {

    "use strict";

    $(window).on('load', function () {

        /*Page Loader active
        ========================================================*/
        $('#preloader').fadeOut();

        // Sticky Nav
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 50) {
                $('.scrolling-navbar').addClass('top-nav-collapse');
                $('.logo').removeClass('hidden');
                $('.logo-white').addClass('hidden');
            } else {
                $('.scrolling-navbar').removeClass('top-nav-collapse');
                $('.logo').addClass('hidden');
                $('.logo-white').removeClass('hidden');
            }
        });

        // one page navigation 
        $('.navbar-nav').onePageNav({
            currentClass: 'active'
        });

        /* Auto Close Responsive Navbar on Click
        ========================================================*/
        function close_toggle() {
            if ($(window).width() <= 768) {
                $('.navbar-collapse a').on('click', function () {
                    $('.navbar-collapse').collapse('hide');
                });
            }
            else {
                $('.navbar .navbar-inverse a').off('click');
            }
        }
        close_toggle();
        $(window).resize(close_toggle);

        /* WOW Scroll Spy
        ========================================================*/
        var wow = new WOW({
            //disabled for mobile
            mobile: false
        });

        wow.init();

        /* OurPartner Carousel 
        ========================================================*/
        var owlOurPartner = $("#our-partner-carousel");
        owlOurPartner.owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            center: true,
            margin: 15,
            slideSpeed: 1000,
            stopOnHover: true,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsiveRefreshRate: true,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 3
                },
                960: {
                    items: 4
                },
                1200: {
                    items: 5
                },
                1920: {
                    items: 5
                }
            }
        });

        /* Back Top Link active
        ========================================================*/
        var offset = 200;
        var duration = 500;
        $(window).scroll(function () {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(400);
            } else {
                $('.back-to-top').fadeOut(400);
            }
        });

        $('.back-to-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);
            return false;
        });

    });

}(jQuery));